import "./style.css";

export default function TabNavHeader({alterTabView, tabView}) {
  return (
    <ul className="nav nav-tabs d-flex justify-content-between">
      <li className="nav-item col-3 pe-2">
        <div className={`nav-link ${tabView === 1 ? 'active' : ''}`} role="button" onClick={() => alterTabView(1)}>
          Geral
        </div>
      </li>
      <li className="nav-item col-3 px-2">
        <div className={`nav-link ${tabView === 2 ? 'active' : ''}`} role="button" onClick={() => alterTabView(2)}>
          Contabilidade
        </div>
      </li>
      <li className="nav-item col-3 px-2">
        <div className={`nav-link ${tabView === 3 ? 'active' : ''}`} role="button" onClick={() => alterTabView(3)}>
          Impostos
        </div>
      </li>
      <li className="nav-item col-3 ps-2">
        <div className={`nav-link ${tabView === 4 ? 'active' : ''}`} role="button" onClick={() => alterTabView(4)}>
          Financeiro
        </div>
      </li>
    </ul>
  );
}
