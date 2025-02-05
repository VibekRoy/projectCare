import { useContext } from "react";
import "./Results.css";
import { ContextAPI } from "../Data/DataContext";
import Result_Card from "../Sub-Components/Result_Card";
function Results() {
  const { patient } = useContext(ContextAPI);
  if (!patient || !patient.lab_results) return <>Loading...</>;
  return (
    <div className="lab-results">
      <p className="lr-heading">Lab Results</p>

      <div className="results-list">
        {patient.lab_results.map((element, index) => (
          <div className="list-margin" key={index}>
            <Result_Card lab_res={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
