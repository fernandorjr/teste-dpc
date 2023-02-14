import api from './axios'

const contatoService = {
  async Adicionar(contato){
    return api.post("/Contato", contato)
  },
  async BuscarTodos(){
    return api.get("/Contato")
  },
  async BuscarPorCodigo(codigo){
    return api.get(`/Contato/${codigo}`)
  },
  async Atualizar(contato){
    return api.get("/Contato", {contato: contato})
  },
  async Deletar(codigo){
    return api.delete(`/Contato?Codigo=${codigo}`)
  }
}

export default contatoService;