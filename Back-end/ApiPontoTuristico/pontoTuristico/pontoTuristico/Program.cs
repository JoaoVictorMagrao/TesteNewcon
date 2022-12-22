using Microsoft.EntityFrameworkCore;
using pontoTuristico.Contexto;
using pontoTuristico.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<Contexto>
       (options => options.UseSqlServer("Data Source=JoaoMagrao;Initial Catalog=bd_ponto_turistico;Integrated Security=false;User ID=sa; Password=123456; Connect Timeout=15; Encrypt=False; TrustServerCertificate=False"));


builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseCors(options =>
options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


app.MapPost("adicionaPontoTuristico", async (cPontoTuristico cpontoTuristico, Contexto contexto) =>
{
    contexto.cPontoTuristico.Add(cpontoTuristico);
    await contexto.SaveChangesAsync();
});

app.MapDelete("excluiPontoTuristico/{id}", async (int id, Contexto contexto) =>
{
    
    var pontoExcluir = await contexto.cPontoTuristico.FirstOrDefaultAsync(p => p.Id == id);
    if(pontoExcluir != null)
    {
        contexto.cPontoTuristico.Remove(pontoExcluir);
        await contexto.SaveChangesAsync();

    }
});

app.MapGet("listarPontoTuristico", async ( Contexto contexto) =>
{

  return await contexto.cPontoTuristico.ToListAsync();
   
  
});

app.MapGet("obterPontoTuristico/{id}", async (int id, Contexto contexto) =>
{

   return await contexto.cPontoTuristico.FirstOrDefaultAsync(p => p.Id == id);
 
   
});

app.MapPut("editarPontoTuristico/{id}", async (int id, cPontoTuristico cpontoTuristico, Contexto contexto) =>
{

    var update = await contexto.cPontoTuristico.FindAsync(id);

    if (update == null)
        return Results.NotFound();

    if (cpontoTuristico.Nome != null)
        update.Nome = cpontoTuristico.Nome;

    if (cpontoTuristico.Descricao != null)
        update.Descricao = cpontoTuristico.Descricao;

    if (cpontoTuristico.Estado != null)
        update.Estado = cpontoTuristico.Estado;

    if (cpontoTuristico.Cidade != null)
        update.Cidade = cpontoTuristico.Cidade;

    if (cpontoTuristico.endereco != null)
        update.endereco = cpontoTuristico.endereco;

    await contexto.SaveChangesAsync();

    return Results.Ok(update);



});








app.UseSwaggerUI();
app.Run();
