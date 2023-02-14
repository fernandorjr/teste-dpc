import "./style.css";
import TabNavHeader from "./TabNavHeader/TabNavHeader";
import TabNavBody from "./TabNavBody/TabNavBody";
import { useState } from "react";

export default function ClientTable() {
  const [tab, setTab] = useState(1)

  const alterTabView = (tab) => {
    setTab(tab);
  }
  return (
    <div className="row pt-5">
      <div id="client-table">
        <TabNavHeader alterTabView={alterTabView} tabView={tab} />

        <TabNavBody tabView={tab} />
      </div>
    </div>
  );
}
