import "./style.css";
import logo from "../../assets/imgs/Logo_DPC_Branca.png";

export default function Header({toogleSideNav}) {
  return (
    <header className="d-flex px-4">

      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <i className="bi bi-list fs-4 me-4" role="button" onClick={toogleSideNav}></i>
          <img src={logo} className="logo" alt="Logo DPC" />
        </div>

        <div id="title">
          <p>Contatos do cliente</p>
        </div>

        <div className="d-flex align-items-center" id="welcome">
          <p>Olá, Cliente</p>

          <i className="bi bi-person-circle fs-2 mx-3"></i>

          <div className="d-flex flex-column justify-content-around">
            <i className="bi bi-box-arrow-right fs-4 mb-2"></i>
            <p className="mt-1">Sair</p>
          </div>
        </div>

      </div>
    </header>
  );
}
