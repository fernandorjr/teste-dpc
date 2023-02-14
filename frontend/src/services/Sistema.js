import api from './axios'

const sistemaService = {
  async Adicionar(sistema){
    return api.post("/Sistema", {sistema:sistema})
  },
  async BuscarTodos(){
    return api.get("/Sistema")
  },
  async BuscarPorCodigo(codigo){
    return api.get(`/Sistema/${codigo}`)
  },
  async Atualizar(sistema){
    return api.get("/Sistema", {sistema: sistema})
  },
  async Deletar(codigo){
    return api.get(`/Sistema?Codigo=${codigo}`)
  }
}

export default sistemaService;