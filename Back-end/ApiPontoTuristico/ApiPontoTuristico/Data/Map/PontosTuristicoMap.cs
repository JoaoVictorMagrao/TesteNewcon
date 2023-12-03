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
            builder.Property(x => x.Name).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(255);
            builder.Property(x => x.AttractionType).IsRequired().HasMaxLength(150);
            builder.Property(x => x.State).IsRequired().HasMaxLength(2);
            builder.Property(x => x.City).IsRequired().HasMaxLength(100);
        }
    }
}
