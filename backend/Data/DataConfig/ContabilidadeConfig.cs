using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DataConfig
{
    public class ContabilidadeConfig
    {
        public void Configure(EntityTypeBuilder<Contabilidade> builder)
        {
            builder.ToTable("Contabilidade");
            builder.HasKey(k => k.Codigo);
            builder.Property(x => x.Codigo).ValueGeneratedOnAdd();

            builder.Property(x => x.Nome).HasColumnType("varchar(250)").IsRequired();
        }
    }
}
