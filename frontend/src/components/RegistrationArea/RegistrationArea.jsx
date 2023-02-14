import BtnPrint from "./BtnPrint/BtnPrint";
import CheckToggle from "./CheckToggle/CheckToggle";
import ClientForm from "./ClientForm/ClientForm";
import ClientTable from "./TabNav/TabNav";

export default function RegistrationArea(){
  return(
    <div className="row py-2 d-flex justify-content-between">
      <div className="col-9">
        <ClientForm />
        <ClientTable />
      </div>
      <div className="col-2">
        <BtnPrint />
        <CheckToggle />
      </div>
    </div>
  )
}