import "./style.css";
import { Link } from "react-router-dom";
import NavList from "./NavList/NavList";


export default function SideNav() {
  return (
    <div className="border m-0 h-100 position-fixed" id="side-nav">
      <Link
        to={"/"}
        className="d-flex align-items-center p-3 text-decoration-none border-bottom nav-item"
      >
        <i className="bi bi-house-door-fill me-2 nav-item-icon"></i>
        <p className="nav-item-title">Início</p>
      </Link>

      <NavList title={"Clientes"} subTitles={["Cadastro"]}/>
    </div>
  );
}
