using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Dtos.Comment
{
    public class CreateCommentDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Content { get; set; } = string.Empty;
    }
}
