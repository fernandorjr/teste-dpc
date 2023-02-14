using Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Repositories.BaseRepository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly DataContext _dataContext;

        public BaseRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        
        
        public virtual async Task Delete(int Codigo)
        {
            var entity = await GetByCodigo(Codigo);
            _dataContext.Set<T>().Remove(entity);
            await _dataContext.SaveChangesAsync();
        }

        public virtual async Task<IEnumerable<T>> BuscarTodos()
        {
            return await _dataContext.Set<T>().AsNoTracking().ToListAsync();
        }

        public virtual async Task<T> GetByCodigo(int codigo)
        {
            return await _dataContext.Set<T>().FindAsync(codigo); ;
        }

        public virtual async Task Insert(T entity)
        {
            await _dataContext.Set<T>().AddAsync(entity);
            await _dataContext.SaveChangesAsync();
        }

        public virtual async Task Update(T entity)
        {
            _dataContext.Set<T>().Update(entity);
            await _dataContext.SaveChangesAsync();
        }
    }
}
