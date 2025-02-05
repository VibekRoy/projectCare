import { useContext } from "react";
import "./List.css";
import { ContextAPI } from "../Data/DataContext";
import List_Card from "../Sub-Components/List_Card";
function List() {
  const { patient } = useContext(ContextAPI);
  if (!patient || !patient.diagnostic_list) return <>Loading...</>;
  return (
    <div className="diag-list">
      <p className="diag-heading">Diagnostic List</p>
      <div className="table-head">
        <p className="h-1">Problem/Diagnosis</p>
        <p className="h-2">Description</p>
        <p className="h-3">Status</p>
      </div>

      <div className="list-card-box">
        {patient.diagnostic_list.map((obj, index) => (
          <List_Card key={index} info={obj} />
        ))}
      </div>
    </div>
  );
}

export default List;
