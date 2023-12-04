using ApiPontoTuristico.Data;
using ApiPontoTuristico.Models;
using ApiPontoTuristico.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ApiPontoTuristico.Repositorios
{
    public class PontosTuristicoRepositorio : IPontosTuristicoRepositorio
    {
        private readonly PontosTuristicosDBContext _dbContext;
        public PontosTuristicoRepositorio(PontosTuristicosDBContext pontosTuristicosDBContext)
        {
            _dbContext = pontosTuristicosDBContext;
        }
        public async Task<PontosTuristicoModel> BuscarPorId(int id)
        {
            return await _dbContext.PontosTuristico.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<PontosTuristicoModel>> BuscarTodosPontosTuristico()
        {
            return await _dbContext.PontosTuristico.ToListAsync();
        }
        public async Task<PontosTuristicoModel> Adicionar(PontosTuristicoModel pontosTuristico)
        {
            await _dbContext.PontosTuristico.AddAsync(pontosTuristico);
            await _dbContext.SaveChangesAsync();

            return pontosTuristico;
        }

        public async Task<PontosTuristicoModel> Atualizar(PontosTuristicoModel pontosTuristico, int id)
        {
           PontosTuristicoModel pontoTuristicoPorId = await BuscarPorId(id);

           if(pontoTuristicoPorId == null)
            {
                throw new Exception($"Ponto Turistico com o ID: {id} Não foi encontrado no banco de dados.");
            }

            pontoTuristicoPorId.Name = pontosTuristico.Name;
            pontoTuristicoPorId.Description = pontosTuristico.Description;
            pontoTuristicoPorId.AttractionType = pontosTuristico.AttractionType;
            pontoTuristicoPorId.State = pontosTuristico.State;
            pontoTuristicoPorId.City = pontosTuristico.City;

            _dbContext.PontosTuristico.Update(pontoTuristicoPorId);
            await _dbContext.SaveChangesAsync();

            return pontoTuristicoPorId;
        }
        public async Task<bool> Apagar(int id)
        {
            PontosTuristicoModel pontoTuristicoPorId = await BuscarPorId(id);
            if (pontoTuristicoPorId == null)
            {
                throw new Exception($"Ponto Turistico com o ID: {id} Não foi encontrado no banco de dados.");
            }

            _dbContext.PontosTuristico.Remove(pontoTuristicoPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

      

        
    }
}
