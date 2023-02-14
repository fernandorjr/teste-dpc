using Microsoft.AspNetCore.Mvc;
using Models.Entitites;
using Repositories.Interfaces;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContabilidadeController : ControllerBase
    {
        private readonly IContabilidadeRepository _contabilidadeRepository;
        public ContabilidadeController(IContabilidadeRepository contabilidadeRepository)
        {
            _contabilidadeRepository = contabilidadeRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar(Contabilidade contabilidade)
        {
            if (contabilidade == null)
                return BadRequest($"{contabilidade} Contabilidade informada não é válida.");

            await _contabilidadeRepository.Insert(contabilidade);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> BuscarTodos()
        {
            var list = await _contabilidadeRepository.BuscarTodos();
            return Ok( list.ToList());
        }

        [HttpGet("{Codigo}")]
        public async Task<IActionResult> BuscarPorCodigo(int Codigo)
        {
            var retorno = await _contabilidadeRepository.GetByCodigo(Codigo);

            if (retorno == null)
                return NotFound($"Código {Codigo} não encontrado.");

            return Ok(retorno);
        }
        
        [HttpPut]
        public async Task<IActionResult> Atualizar(Contabilidade contabilidade)
        {
            await _contabilidadeRepository.Update(contabilidade);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Deletar(int Codigo)
        {
            await _contabilidadeRepository.Delete(Codigo);
            return Ok();
        }
    }
}
