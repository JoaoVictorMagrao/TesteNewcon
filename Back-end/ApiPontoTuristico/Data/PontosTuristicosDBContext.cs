using ApiPontoTuristico.Data.Map;
using ApiPontoTuristico.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiPontoTuristico.Data
{
    public class PontosTuristicosDBContext : DbContext
    {
        public PontosTuristicosDBContext(DbContextOptions<PontosTuristicosDBContext> options)
            : base(options)
        {
        }
        public DbSet<PontosTuristicoModel> PontosTuristico { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PontosTuristicoMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
