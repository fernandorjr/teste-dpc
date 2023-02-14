import "./style.css";
import logo from "../../assets/imgs/solucoes_dpc_2022.png";

export default function HomePage() {
  return (
    <div className="container pe-5 d-flex justify-content-center" id="home-page">
      <div>
        <img src={logo} alt="logo_DPC" />
      </div>
    </div>
  );
}
