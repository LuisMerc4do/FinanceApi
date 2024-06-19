using FinanceApi.Dtos.Comment;
using FinanceApi.Helpers;
using FinanceApi.Models;

namespace FinanceApi.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllAsync(CommentQueryObject queryObject);
        Task<Comment?> GetByIdAsync(int id);
        Task<Comment> CreateAsync(Comment commentModel);
        Task<Comment?> DeleteAsync(int id);
        Task<Comment> UpdateAsync(int id, UpdateCommentDto commentDto);
    }
}
