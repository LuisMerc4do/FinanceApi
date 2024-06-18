using FinanceApi.Dtos.Stock;
using FinanceApi.Helpers;
using FinanceApi.Models;

namespace FinanceApi.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsync(QueryObject query);
        Task<Stock?> GetByIDAsync(int id);// Can be null
        Task<Stock> CreateAsync(Stock stock);
        Task<Stock?> UpdateAsync(int id, UpdateStockDto stock);
        Task<Stock?> DeleteAsync(int id);
        Task<bool> StockExist(int id);
    }
}
