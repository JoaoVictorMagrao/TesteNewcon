using Microsoft.EntityFrameworkCore;
using pontoTuristico.Models;

namespace pontoTuristico.Contexto
{
    public class Contexto : DbContext
    {
        

        public Contexto(DbContextOptions<Contexto> options)
            : base(options) => Database.EnsureCreated();

        public DbSet<cPontoTuristico> cPontoTuristico { get; set; }
    }
}
