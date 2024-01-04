using ApiPontoTuristico.Models;
using ApiPontoTuristico.Repositorios.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System.Runtime.Intrinsics.X86;
using System;

namespace ApiPontoTuristico.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class PontosTuristicoController : ControllerBase
    {
        private readonly IPontosTuristicoRepositorio _pontosTuristicoRepositorio;
        public PontosTuristicoController(IPontosTuristicoRepositorio pontosTuristicoRepositorio)
        {
            _pontosTuristicoRepositorio = pontosTuristicoRepositorio;
        }
   
        [HttpGet]
        public async Task<ActionResult<List<PontosTuristicoModel>>> BuscarTodosPontosTuristicos()
        {
            List<PontosTuristicoModel> pontosTuristico = await _pontosTuristicoRepositorio.BuscarTodosPontosTuristico();

            pontosTuristico = pontosTuristico.OrderByDescending(p => p.dataInclusao).ToList();

            return Ok(pontosTuristico);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PontosTuristicoModel>> BuscarPorId(int id)
        {
            PontosTuristicoModel pontoTuristico = await _pontosTuristicoRepositorio.BuscarPorId(id);
            return Ok(pontoTuristico);
        }

        [HttpPost]
        public async Task<ActionResult<PontosTuristicoModel>> Cadastrar([FromBody] PontosTuristicoModel pontosTuristicoModel)
        {
            try
            {
                pontosTuristicoModel.dataInclusao = DateTime.Now;
                PontosTuristicoModel pontosTuristico = await _pontosTuristicoRepositorio.Adicionar(pontosTuristicoModel);

                return Ok(true);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao cadastrar ponto turístico: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PontosTuristicoModel>> Atualizar([FromBody] PontosTuristicoModel pontosTuristicoModel, int id)
        {
            pontosTuristicoModel.Id = id;
            PontosTuristicoModel pontosTuristico = await _pontosTuristicoRepositorio.Atualizar(pontosTuristicoModel, id);
            return Ok(true);
        }
      
        [HttpDelete("{id}")]
        public async Task<ActionResult<object>> Apagar(int id)
        {
            try
            {
                bool apagado = await _pontosTuristicoRepositorio.Apagar(id);

                if (apagado)
                    return Ok(apagado);
                else
                    return NotFound();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao apagar ponto turístico: {ex.Message}");
            }
        }

        [HttpGet("nome")]
        public async Task<ActionResult<List<PontosTuristicoModel>>> BuscarPorNome(string nome)
        {
            try
            {
                if (string.IsNullOrEmpty(nome))
                {
                    return BadRequest("O parâmetro 'nome' não pode ser vazio.");
                }

                List<PontosTuristicoModel> pontosTuristico = await _pontosTuristicoRepositorio.BuscarPorNome(nome);

                return Ok(pontosTuristico);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar pontos turísticos por nome: {ex.Message}");
            }
        }


        [HttpGet("descricao")]
        public async Task<ActionResult<List<PontosTuristicoModel>>> BuscarPorDescricao(string descricao)
        {
            try
            {

                if (string.IsNullOrEmpty(descricao))
                {
                    return BadRequest("O parâmetro 'Descrição' não pode ser vazio.");
                }

                List<PontosTuristicoModel> pontosTuristico = await _pontosTuristicoRepositorio.BuscarPorDescricao(descricao);

           

                return Ok(pontosTuristico);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar pontos turísticos por nome: {ex.Message}");
            }
        }
    }
}
