using ApiPontoTuristico.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ApiPontoTuristico.Data.Map
{
    public class PontosTuristicoMap : IEntityTypeConfiguration<PontosTuristicoModel>
    {
        public void Configure(EntityTypeBuilder<PontosTuristicoModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Descricao).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Endereco).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Estado).IsRequired().HasMaxLength(2);
            builder.Property(x => x.Cidade).IsRequired().HasMaxLength(100);
        }
    }
}
