using Data.Context;
using Models.Entitites;
using Repositories.BaseRepository;
using Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public class SistemaRepository : BaseRepository<Sistema>, ISistemaRepository
    {
        public SistemaRepository(DataContext dataContext) : base(dataContext)
        {
        }
    }
}
