using Data.Context;
using Microsoft.EntityFrameworkCore;
using Models.Entitites;
using Repositories.BaseRepository;
using Repositories.Interfaces;
using System.Linq;

namespace Repositories.Repositories
{
    public class ClienteRepository : BaseRepository<Cliente>, IClienteRepository
    {
        public readonly DataContext _dataContext;
        public ClienteRepository(DataContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }
        public override async Task<IEnumerable<Cliente>> BuscarTodos()
        {
            var retorno = await _dataContext.Set<Cliente>().Include(x => x.Contatos).AsNoTracking().ToListAsync();
            return retorno;
        }

        public override async Task<Cliente> GetByCodigo(int codigo)
        {
            var lista = await _dataContext.Set<Cliente>().Include(x => x.Contatos).ToListAsync();
            var retorno = lista.Where(x => x.Codigo == codigo).FirstOrDefault();
            return retorno;
        }
    }
}
