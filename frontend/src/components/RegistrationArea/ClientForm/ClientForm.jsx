import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import "./style.css";
import clienteService from "../../../services/Cliente";

const client = {
  codigo: 100,
  nome: "E COMMERCE BRASIL LTDA",
};

export default function ClientForm() {
  const { sistema, cliente, clientes, setCliente } = useContext(DataContext);

  const onChange = (value) => {
    console.log(value);
  }

  const getCliente = ({target}) => {
    var codigo = target.value;
    if(codigo){
      clienteService.BuscarPorCodigo(codigo).then(({data}) => setCliente(data))
    }
    else{
      setCliente({})
    }
  };

  return (
    <form id="client-form">
      <div className="row justify-content-between">
        <div className="col-2 ">
          <label htmlFor="codigo" className="form-label fw-bold">
            Código
          </label>
          <input
            type="text"
            id="codigo"
            className="form-control fw-bold px-2"
            defaultValue={cliente?.codigo}
            disabled
          />
        </div>
        <div className="col-6">
          <label htmlFor="nome" className="form-label fw-bold">
            Nome
          </label>

          <select
            onChange={(event) => getCliente(event)}
            className="form-select px-2"
          >
            <option value="" >Selecione a empresa</option>
            {clientes?.map((c) => {
              return (
                <option key={c.codigo} value={c.codigo} readOnly>
                  {c.nome}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-2">
          <label className="form-label fw-bold">Sistema</label>
          <select className="form-select px-2">
            {sistema?.map((s) => {
              return (
                <option key={s.codigo} value={s.codigo} readOnly>
                  {s.nome}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="row col-10 pt-3 justify-content-between">
        <div className="col-2 ">
          <label htmlFor="codigo" className="form-label fw-bold">
            Data Início
          </label>
          <input
            type="date"
            id="data-inicio"
            className="form-control px-2"
            defaultValue="2022-01-01"
          />
        </div>
        <div className="col-8 d-flex justify-content-between pt-2">
          <div>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                id="check-vip"
              />
              <label className="form-check-label" htmlFor="check-vip">
                VIP?
              </label>
            </div>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                id="check-mktg"
              />
              <label className="form-check-label" htmlFor="check-mktg">
                Necessita Marketing?
              </label>
            </div>
          </div>
          <div>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                id="check-ti"
              />
              <label className="form-check-label" htmlFor="check-ti">
                Necessita TI?
              </label>
            </div>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                id="check-moeda"
              />
              <label className="form-check-label" htmlFor="check-moeda">
                Moeda Estrangeira?
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
