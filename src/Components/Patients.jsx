import { useContext } from "react";
import Patient_Card from "../Sub-Components/Patient_Card";
import "./Patients.css";
import { ContextAPI } from "../Data/DataContext";
function Patients() {
  const { res, patient, setPatient } = useContext(ContextAPI);
  const handleClick = (pat) => {
    setPatient(pat);
  };
  return (
    <div className="Patients">
      <div className="patient-top">
        <p>Patients</p>
        <img src=" search.svg" alt="" />
      </div>

      <div className="patient-bottom">
        {res.map((resObj, index) => (
          <Patient_Card
            name={resObj.name}
            age={resObj.age}
            pp={resObj.profile_picture}
            gender={resObj.gender}
            key={index}
            isSelected={resObj === patient}
            onClick={() => {
              handleClick(resObj);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Patients;
