using Microsoft.AspNetCore.Mvc;
using Models.Entitites;
using Repositories.Interfaces;
using Repositories.Repositories;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContatoController : ControllerBase
    {
        public readonly IContatoRepository _contatoRepository;
        public ContatoController(IContatoRepository contatoRepository)
        {
            _contatoRepository = contatoRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar(Contato contato)
        {
            if (contato == null)
                return BadRequest($"{contato} Contato infomado não é válido.");

            await _contatoRepository.Insert(contato);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> BuscarTodos()
        {
            var lista = await _contatoRepository.BuscarTodos();
            return Ok(lista);
        }

        [HttpGet("{Codigo}")]
        public async Task<IActionResult> BuscarPorCodigo(int Codigo)
        {
            var resultado = await _contatoRepository.GetByCodigo(Codigo);

            if (resultado == null)
                return NotFound($"Código {Codigo} não encontrado.");
            
            return Ok(resultado);
        }

        [HttpPut]
        public async Task<IActionResult> Atualizar(Contato contato)
        {
            await _contatoRepository.Update(contato);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Deletar(int Codigo)
        {
            await _contatoRepository.Delete(Codigo);
            return Ok();
        }
    }
}
