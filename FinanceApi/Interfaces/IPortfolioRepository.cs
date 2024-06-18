using FinanceApi.Models;

namespace FinanceApi.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Stock>> GetUserPorfolio(AppUser user);
    }
}
