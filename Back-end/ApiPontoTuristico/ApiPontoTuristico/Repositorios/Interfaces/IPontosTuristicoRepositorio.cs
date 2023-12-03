using ApiPontoTuristico.Models;
using System.Reflection;

namespace ApiPontoTuristico.Repositorios.Interfaces
{
    public interface IPontosTuristicoRepositorio
    {
        Task<List<PontosTuristicoModel>> BuscarTodosPontosTuristico();
        Task<PontosTuristicoModel> BuscarPorId(int id);
        Task<PontosTuristicoModel> Adicionar(PontosTuristicoModel pontosTuristico);
        Task<PontosTuristicoModel> Atualizar(PontosTuristicoModel pontosTuristico, int id);
        Task<bool> Apagar(int id);
    }
}
