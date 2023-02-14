using Data.DataConfig;
using Microsoft.EntityFrameworkCore;
using Models.Entitites;

namespace Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Sistema>(new SistemaConfig().Configure);
            builder.Entity<Contabilidade>(new ContabilidadeConfig().Configure);
            builder.Entity<Cliente>(new ClienteConfig().Configure);
            builder.Entity<Contato>(new ContatoConfig().Configure);
            base.OnModelCreating(builder);
        }
    }
}
