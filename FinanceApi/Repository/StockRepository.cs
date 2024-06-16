using FinanceApi.Data;
using FinanceApi.Interfaces;
using FinanceApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceApi.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _context;

        public StockRepository(ApplicationDBContext context, IStockRepository stockRepo) 
        {
            _context = context;
        }
        public async Task<List<Stock>> GetAllAsync()
        {
            var stocks = await _context.Stocks.ToListAsync();
        }
    }
}
