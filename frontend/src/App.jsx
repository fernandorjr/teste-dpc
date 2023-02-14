import "./assets/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import { useState } from "react";
import DataContext from "./context/DataContext";

function App() {
  const [showSideNav, setShowSideNav] = useState(true);
  const toogleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const [sistema, setSistema] = useState([]);
  const [cliente, setCliente] = useState({});
  const [clientes, setClientes] = useState([]);
  const [contabilidade, setContabilidade] = useState({});

  return (
    <DataContext.Provider
      value={{
        sistema,
        setSistema,
        cliente,
        setCliente,
        clientes,
        setClientes,
        contabilidade,
        setContabilidade,
      }}
    >
      <Header toogleSideNav={toogleSideNav} />
      {showSideNav && <SideNav />}
      <div id="main" className="container-fluid my-4">
        <Outlet />
      </div>
    </DataContext.Provider>
  );
}

export default App;
