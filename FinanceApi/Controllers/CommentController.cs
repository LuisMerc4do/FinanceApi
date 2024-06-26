using FinanceApi.Dtos.Comment;
using FinanceApi.Extensions;
using FinanceApi.Helpers;
using FinanceApi.Interfaces;
using FinanceApi.Mappers;
using FinanceApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers
{
    [Route("FinanceApi/comment")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IStockRepository _stockRepo;
        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;
        public CommentController(ICommentRepository commentRepo, IStockRepository stockRepo, UserManager<AppUser> userManager, IFMPService fmpService)
        {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
            _userManager = userManager;
            _fmpService = fmpService;
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] CommentQueryObject queryObject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comments = await _commentRepo.GetAllAsync(queryObject);
            var commentDto = comments.Select(s => s.ToCommentDto());

            return Ok(commentDto);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.GetByIdAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }
        [HttpPost("{symbol}")]
        public async Task<IActionResult> Create(string symbol, [FromBody] CreateCommentDto commentDto)
        {
            try
            {
                var stock = await _stockRepo.GetBySymbolAsync(symbol);

                if (stock == null)
                {
                    // If the stock doesn't exist, create it
                    stock = await _fmpService.FindStockBySymbolAsync(symbol);
                    if (stock == null)
                    {
                        return BadRequest("Stock does not exist and cannot be created.");
                    }
                    else
                    {
                        await _stockRepo.CreateAsync(stock);
                    }
                }

                // Continue with comment creation logic
                var username = User.GetUsername();
                var appUser = await _userManager.FindByNameAsync(username);

                if (appUser == null)
                {
                    return BadRequest("User not found.");
                }

                var commentModel = commentDto.ToCommentFromCreate(stock.Id);
                commentModel.AppUserId = appUser.Id;

                await _commentRepo.CreateAsync(commentModel);

                return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }


        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var commentModel = await _commentRepo.DeleteAsync(id);
            if (commentModel == null)
            {
                return NotFound("Comment Does not exist");
            }
            return Ok(commentModel);
        }
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentDto updateCommentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var commentModel = await _commentRepo.UpdateAsync(id, updateCommentDto);
            if (commentModel == null)
            {
                return NotFound();
            }

            return Ok(commentModel.ToCommentDto());
        }
    }
}
