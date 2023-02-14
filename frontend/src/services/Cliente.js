import api from './axios'

const clienteService = {
  async Adicionar(cliente){
    return api.post("/Cliente", cliente)
  },
  async BuscarTodos(){
    return api.get("/Cliente")
  },
  async BuscarPorCodigo(codigo){
    return api.get(`/Cliente/${codigo}`)
  },
  async Atualizar(cliente){
    return api.get("/Cliente", {cliente: cliente})
  },
  async Deletar(codigo){
    return api.get(`/Cliente?Codigo=${codigo}`)
  }
}

export default clienteService;