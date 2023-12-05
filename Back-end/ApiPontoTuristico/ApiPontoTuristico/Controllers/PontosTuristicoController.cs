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
            PontosTuristicoModel pontosTuristico=  await _pontosTuristicoRepositorio.Adicionar(pontosTuristicoModel);

            return Ok(pontosTuristico);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PontosTuristicoModel>> Atualizar([FromBody] PontosTuristicoModel pontosTuristicoModel, int id)
        {
            pontosTuristicoModel.Id = id;
            PontosTuristicoModel pontosTuristico = await _pontosTuristicoRepositorio.Atualizar(pontosTuristicoModel, id);
            return Ok(pontosTuristico);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PontosTuristicoModel>> Apagar(int id)
        {
            bool apagado = await _pontosTuristicoRepositorio.Apagar(id);
            return Ok(apagado);
        }
    }
}
