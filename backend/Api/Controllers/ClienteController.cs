using Microsoft.AspNetCore.Mvc;
using Models.Entitites;
using Repositories.Interfaces;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        public readonly IClienteRepository _clienteRepository;
        public ClienteController(IClienteRepository clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar(Cliente cliente)
        {
            if(cliente == null)
                return BadRequest($"{cliente} Cliente informado não é válido.");

            await _clienteRepository.Insert(cliente);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> BuscarTodos()
        {
            var lista = await _clienteRepository.BuscarTodos();

            return Ok(lista);
        }

        [HttpGet("{Codigo}")]
        public async Task<IActionResult> BuscarPorCodigo(int Codigo)
        {
            var retorno = await _clienteRepository.GetByCodigo(Codigo);

            if (retorno == null)
                return NotFound($"Código {Codigo} não encontrado.");

            return Ok(retorno);
        }

        [HttpPut]
        public async Task<IActionResult> Atualizar(Cliente cliente)
        {
            await _clienteRepository.Update(cliente);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Deletar(int Codigo)
        {
            await _clienteRepository.Delete(Codigo);
            return Ok();
        }

    }
}
