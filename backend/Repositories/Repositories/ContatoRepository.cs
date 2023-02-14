using Data.Context;
using Microsoft.EntityFrameworkCore;
using Models.Entitites;
using Repositories.BaseRepository;
using Repositories.Interfaces;

namespace Repositories.Repositories
{
    public class ContatoRepository : BaseRepository<Contato>, IContatoRepository
    {
        public readonly DataContext _dataContext;
        public ContatoRepository(DataContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }
        public override async Task<IEnumerable<Contato>> BuscarTodos()
        {
            var lista = await _dataContext.Set<Contato>().Include(x => x.Cliente).AsNoTracking().ToListAsync();
            return lista;
        }

        public override async Task Delete(int Codigo)
        {
            var entity = await GetByCodigo(Codigo);
            entity.Status = false;
            await Update(entity);
        }
    }
}
