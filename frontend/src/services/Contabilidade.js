import api from './axios'

const contabilidadeService = {
  async Adicionar(contabilidade){
    return api.post("/Contabilidade", {contabilidade:contabilidade})
  },
  async BuscarTodos(){
    return api.get("/Contabilidade")
  },
  async BuscarPorCodigo(codigo){
    return api.get(`/Contabilidade/${codigo}`)
  },
  async Atualizar(contabilidade){
    return api.put("/Contabilidade", {contabilidade: contabilidade})
  },
  async Deletar(codigo){
    return api.delete(`/Contabilidade?Codigo=${codigo}`)
  }
}

export default contabilidadeService;