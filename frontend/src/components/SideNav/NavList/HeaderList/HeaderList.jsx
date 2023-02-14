export default function HeaderList({ showList, setShowList, title }) {
  return (
    <div
      onClick={() => setShowList(!showList)}
      className="d-flex justify-content-between align-items-center p-3 border-bottom nav-item"
      role="button"
    >
      <div className="d-flex">
        <i className="bi bi-folder me-2 nav-item-icon"></i>
        <p className="nav-item-title">{title}</p>
      </div>
      {showList && <i className="bi bi-chevron-up"></i>}
      {!showList && <i className="bi bi-chevron-down"></i>}
    </div>
  );
}
