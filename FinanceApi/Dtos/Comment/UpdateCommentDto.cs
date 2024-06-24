using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Dtos.Comment
{
    public class UpdateCommentDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Content { get; set; } = string.Empty;
    }
}
