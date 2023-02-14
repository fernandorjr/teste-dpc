using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entitites;

namespace Data.DataConfig
{
    public class ContatoConfig : IEntityTypeConfiguration<Contato>
    {
        public void Configure(EntityTypeBuilder<Contato> builder)
        {
            builder.ToTable("Contato");
            builder.HasKey(k => k.Codigo);
            builder.Property(x => x.Codigo).ValueGeneratedOnAdd();

            builder.HasOne(x => x.Cliente);

            builder.Property(x => x.Nome).IsRequired();
            builder.Property(x => x.Email).IsRequired();
            builder.Property(x => x.Telefone).IsRequired();
            builder.Property(x => x.Status).IsRequired();
        }
    }
}
