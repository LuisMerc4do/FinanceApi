using FinanceApi.Models;

namespace FinanceApi.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
