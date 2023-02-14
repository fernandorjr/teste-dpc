import { useContext, useEffect, useState  } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import RegistrationArea from "../components/RegistrationArea/RegistrationArea";
import DataContext from "../context/DataContext";
import sistemaService from "../services/Sistema";
import contabilidadeService from "../services/Contabilidade";
import clienteService from "../services/Cliente";

export default function RegistrationPage() {
  const { setSistema, setContabilidade, setClientes } = useContext(DataContext);

  const getSistema = () => {
    sistemaService.BuscarTodos().then(({ data }) => {
      setSistema(data);
    });
  }

  const getClientes = () => {
    clienteService.BuscarTodos().then(({ data }) => {
      setClientes(data);
    });
  }

  const getContabilidade = () => {
    contabilidadeService.BuscarTodos().then(({ data }) => {
      setContabilidade(data);
    });
  }

  useEffect(() => {
    getSistema();
    getClientes();
    getContabilidade();
  }, []);
  return (
    <div className="pe-5">
      <PageTitle title="Cadastro" />
      <RegistrationArea />
    </div>
  );
}
