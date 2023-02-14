import { useContext, useState } from "react";
import DataContext from "../../../../../context/DataContext";
import { confirmAlert } from "react-confirm-alert";
import clienteService from "../../../../../services/Cliente";
import contatoService from "../../../../../services/Contato";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./style.css";

const contatoDefaultValues = {
  nome: "",
  email: "",
  telefone: "",
  status: true,
  clienteId: 0,
};

export default function Table({ theads }) {
  const { cliente, setCliente } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [contato, setContato] = useState(contatoDefaultValues);
  const handleFieldsChange = (e) =>
    setContato({
      ...contato,
      [e.target.name]: e.target.value,
    });

  const alert = (data) => {
    return confirmAlert({
      title: "Desativar",
      message: `Deseja desativar o contato ${data.nome}?`,
      buttons: [
        {
          label: "Sim",
          onClick: () => deleteData(data),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const deleteData = (dt) => {
    setCliente({});

    contatoService.Deletar(dt.codigo).then(() => {
      clienteService.BuscarPorCodigo(cliente?.codigo).then(({data}) => setCliente(data));
    });
  };

  const handleClose = () => {
    setContato(contatoDefaultValues)
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSave = () => {
    const cnt = contato;
    cnt.clienteId = cliente?.codigo;
    contatoService.Adicionar(cnt).then(() => {
      clienteService.BuscarPorCodigo(cliente?.codigo).then(({data}) => setCliente(data));
    });
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Incluir Contato</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={contato.nome}
                name="nome"
                onChange={(e) => handleFieldsChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={contato.email}
                name="email"
                onChange={handleFieldsChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="21 9 9988-7766"
                value={contato.telefone}
                name="telefone"
                onChange={handleFieldsChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <table className="table-responsive table-bordered">
        <thead className="fw-bold">
          <tr>
            {theads.map((title) => {
              return <th key={title}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cliente.contatos?.map((dt) => {
            return (
              <tr key={dt.codigo}>
                <td>
                  <span>{dt.nome}</span>
                </td>
                <td>
                  <span>{dt.email}</span>
                </td>
                <td>
                  <span>{dt.telefone}</span>
                </td>
                <td>
                  <span>{dt.status ? "Ativo" : "Inativo"}</span>
                </td>
                <td>
                  <span>
                    <i
                      className="bi bi-trash3 text-danger fs-6"
                      role="button"
                      onClick={() => {
                        alert(dt);
                      }}
                    ></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {cliente?.codigo && (
        <div className="row justify-content-end mt-3">
        <button className="btn btn-success col-1 btn-add" onClick={handleShow}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
      )}
    </div>
  );
}
