using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entitites;

namespace Data.DataConfig
{
    internal class SistemaConfig : IEntityTypeConfiguration<Sistema>
    {
        public void Configure(EntityTypeBuilder<Sistema> builder)
        {
            builder.ToTable("Sistema");
            builder.HasKey(k => k.Codigo);
            builder.Property(x => x.Codigo).ValueGeneratedOnAdd();

            builder.Property(x => x.Nome).HasColumnType("varchar(250)").IsRequired();
        }
    }
}
