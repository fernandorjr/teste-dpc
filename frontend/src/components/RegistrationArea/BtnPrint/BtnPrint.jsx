import "./style.css";

export default function BtnPrint() {
  return (
    <div className="btn btn-primary py-1 px-2">
      <span className="me-2">Imprimir em PDF</span>
      <i className="bi bi-printer-fill"></i>
    </div>
  );
}
