namespace Repositories.BaseRepository
{
    public interface IBaseRepository<T> where T : class
    {
        Task Insert(T entity);
        Task Update(T entity);
        Task Delete(int codigo);
        Task<IEnumerable<T>> BuscarTodos();
        Task<T> GetByCodigo(int codigo);
    }
}
