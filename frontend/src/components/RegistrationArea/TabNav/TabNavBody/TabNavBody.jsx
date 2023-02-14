import Geral from "../Geral/Geral";
import Contabilidade from "../Contabilidade/Contabilidade";
import "./style.css";

const contacts = [
  {Id: 1, Nome: "Renata Souza", email:"renata.s@e.com", Telefone: "(21) 1234-5678", Status: "Ativo"},
  {Id: 2, Nome: "Carlos Pereira", email: "carlos.p@e.com", Telefone: "(21) 4321-8765", Status: "Inativo"},
  {Id: 3, Nome: "Welton Júnior", email: "welton.j@e.com", Telefone: "(21) 5678-1234", Status: "Ativo"},
]
export default function TabNavBody({tabView}) {
  return (
    <div className="table-body">
      {tabView === 1 && (
        <Geral contacts={contacts} />
      )}
      {tabView === 2 && (
        <Contabilidade />
      )}
    </div>
  );
}
