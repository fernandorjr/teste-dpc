import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import "./style.css";

export default function CheckToggle() {
  const { cliente } = useContext(DataContext);

  return (
    <div className="pt-3">
        <div className="button b2" id="button-13">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
    </div>
  );
}
