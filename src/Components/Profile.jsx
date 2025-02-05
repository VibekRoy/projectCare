import { useContext } from "react";
import "./Profile.css";
import { ContextAPI } from "../Data/DataContext";
function Profile() {
  const { patient } = useContext(ContextAPI);
  if (!patient || !patient.diagnosis_history) return <>Loading...</>;
  const DOB = patient.date_of_birth;
  const DOB_date = new Date(DOB);

  const DOB_format = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(DOB_date);

  return (
    <div className="profile-details">
      <img
        src={patient.profile_picture}
        alt="pp"
        className="profile-details-img"
      />
      <p className="profile-details-name">{patient.name}</p>
      <div className="details-info">
        <img src="../src/assets/BirthIcon.svg" alt="" width={"42px"} />
        <div className="det">
          <p className="det-1">Date of Birth</p>
          <p className="det-2">{DOB_format}</p>
        </div>
      </div>

      <div className="details-info">
        <img src={`../src/assets/${patient.gender=='Female'?'FemaleIcon':'MaleIcon'}.svg`} alt="" width={"42px"} />
        <div className="det">
          <p className="det-1">Gender</p>
          <p className="det-2">{patient.gender}</p>
        </div>
      </div>

      <div className="details-info">
        <img src="../src/assets/PhoneIcon.svg" alt="" width={"42px"} />
        <div className="det">
          <p className="det-1">Contact Info.</p>
          <p className="det-2">{patient.phone_number}</p>
        </div>
      </div>

      <div className="details-info">
        <img src="../src/assets/PhoneIcon.svg" alt="" width={"42px"} />
        <div className="det">
          <p className="det-1">Emergency Contacts</p>
          <p className="det-2">{patient.emergency_contact}</p>
        </div>
      </div>

      <div className="details-info">
        <img src="../src/assets/InsuranceIcon.svg" alt="" width={"42px"} />
        <div className="det">
          <p className="det-1">Insurance Provider</p>
          <p className="det-2">{patient.insurance_type}</p>
        </div>
      </div>
      <button>Show All Information</button>
    </div>
  );
}

export default Profile;
