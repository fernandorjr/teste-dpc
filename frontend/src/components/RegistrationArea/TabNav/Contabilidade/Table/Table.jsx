import "./style.css";
import { confirmAlert } from "react-confirm-alert";
import { useContext } from "react";
import DataContext from "../../../../../context/DataContext";
import contabilidadeService from "../../../../../services/Contabilidade";
import format from "../../../../utils/format";

export default function Table() {
  const { contabilidade, setContabilidade } = useContext(DataContext);

  const alert = (data) => {
    return confirmAlert({
      title: "Excluir",
      message: `Confirmar exclusão de ${data.nome}?`,
      buttons: [
        {
          label: "Sim",
          onClick: () => removeData(data),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const removeData = (dt) => {
    contabilidadeService.Deletar(dt.codigo).then(() => {
      contabilidadeService.BuscarTodos().then(({data}) => setContabilidade(data))
    });
  };

  return (
    <table className="table-responsive table-bordered">
      <thead className="fw-bold">
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Data Início</th>
          <th>Data Fim</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contabilidade?.map((cont) => {
          return (
            <tr key={cont.codigo}>
              <td>
                <span>{cont.codigo}</span>
              </td>
              <td>
                <span>{cont.nome}</span>
              </td>
              <td>
                <span>{format.formatDate(cont.dataInicio)}</span>
              </td>
              <td>
                <span>{format.formatDate(cont.dataFim)}</span>
              </td>
              <td>
                <span>
                  <i
                    className="bi bi-trash3 text-danger fs-6"
                    role="button"
                    onClick={() => {
                      alert(cont);
                    }}
                  ></i>
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
