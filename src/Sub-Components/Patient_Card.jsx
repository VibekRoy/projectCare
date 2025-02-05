/* eslint-disable react/prop-types */
import "./Patient_Card.css";

function Patient_Card({ name, age, pp, gender, isSelected, onClick }) {
  return (
    <div className="container-box" onClick={onClick}>
      <div className={`patient-card ${isSelected ? "change-bg" : ""}`}>
        <div className="whole-info">
          <img src={pp} alt="" />
          <div className="card-content">
            <p className="card-name">{name}</p>
            <p className="card-details">
              {gender}, {age}
            </p>
          </div>
        </div>

        <div className="dots">
          <img src="../src/assets/Dots.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Patient_Card;
