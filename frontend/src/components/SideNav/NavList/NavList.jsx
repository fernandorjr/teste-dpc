import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderList from "./HeaderList/HeaderList";

export default function NavList({ title, subTitles }) {
  const [showList, setShowList] = useState(true);
  return (
    <>
      <HeaderList showList={showList} setShowList={setShowList} title={title} />
      {showList && (
        <div>
          {subTitles.map((subTitle) => {
            return (
              <div key={subTitle}>
                <ul className="p-3 text-decoration-none border-bottom nav-item">
                  <li>
                    <Link
                      to={`/${subTitle.toLowerCase()}`}
                      className="d-flex align-items-center text-decoration-none ms-3 nav-item "
                    >
                      <i className="bi bi-cursor-fill me-2 nav-item-icon"></i>
                      <p className="nav-item-title">{subTitle}</p>
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
