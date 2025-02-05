import { useContext, useEffect, useState } from "react";
import Patient_Card from "../Sub-Components/Patient_Card";
import "./Patients.css";
import { ContextAPI } from "../Data/DataContext";
function Patients() {
  const { res, patient, setPatient } = useContext(ContextAPI);
  const [filteredData, setFilteredData] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setFilteredData(res);
  }, [res]);

  const handleClick = (pat) => {
    setPatient(pat);
  };

  const handleSearch = () => {
    setDisplay(!display);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    const results = res.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(results);
  };
  return (
    <div className="Patients">
      <div className="patient-top">
        <p className={`${display ? "setDisplay" : "setDisplay1"}`}>Patients</p>
        <input
          type="text"
          className={`${display ? "setDisplay1" : "setDisplay"} search-box`}
          onChange={handleInputChange}
        />
          <img
            src=" search.svg"
            alt="search-icon"
            className={` search-icon`}
            onClick={handleSearch}
          />
      </div>

      <div className="patient-bottom">
        {filteredData.map((resObj, index) => (
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
