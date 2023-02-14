using Data.Context;
using Models.Entitites;
using Repositories.BaseRepository;
using Repositories.Interfaces;

namespace Repositories.Repositories
{
    public class ContabilidadeRepository : BaseRepository<Contabilidade>, IContabilidadeRepository
    {
        public ContabilidadeRepository(DataContext dataContext) : base(dataContext)
        {
        }
    }
}
