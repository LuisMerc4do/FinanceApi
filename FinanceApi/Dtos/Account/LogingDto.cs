using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Dtos.Account
{
    public class LogingDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
