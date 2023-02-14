using Microsoft.AspNetCore.Mvc;
using Models.Entitites;
using Repositories.Interfaces;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SistemaController : ControllerBase
    {
        private readonly ISistemaRepository _sistemaRepository;
        public SistemaController(ISistemaRepository sistemaRepository)
        {
            _sistemaRepository = sistemaRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar(Sistema sistema)
        {
            if(sistema == null)
                return BadRequest($"{sistema} Sistema informado não é válido.");

            await _sistemaRepository.Insert(sistema);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> BuscarTodos()
        {
            var list = await _sistemaRepository.BuscarTodos();
            return Ok(list.ToList());
        }

        [HttpGet("{Codigo}")]
        public async Task<IActionResult> BuscarPorCodigo(int Codigo)
        {
            var resultado = await _sistemaRepository.GetByCodigo(Codigo);

            if (resultado == null)
                return NotFound($"Código {Codigo} não encontrado.");
            
            return Ok(resultado);
        }

        [HttpPut]
        public async Task<IActionResult> Atualizar(Sistema sistema)
        {
            await _sistemaRepository.Update(sistema);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Deletar(int Codigo)
        {
            await _sistemaRepository.Delete(Codigo);
            return Ok();
        }
    }
}
