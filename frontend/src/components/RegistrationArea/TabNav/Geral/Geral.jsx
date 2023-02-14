import "./style.css";
import Table from "./Table/Table";

export default function Geral({contacts}) {
  return (
    <div className="card">
      <div className="card-header py-1">Contatos do Cliente</div>
      <div className="card-body p-5">
        <Table theads={["Nome", "E-mail", "Telefone", "Status", ""]} data={contacts} />
      </div>
    </div>
  );
}
