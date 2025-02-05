import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [clicked, setClicked] = useState("Patients");

  return (
    <div className="navbar">
      <div className="logo">
        <img src="../src/assets/TestLogo.svg" alt="" />
      </div>
      <div className="menu">
        <div
          className={`menu-item ${clicked === "Home" ? "selected" : ""}`}
          onClick={() => setClicked("Home")}>
          <img src="../src/assets/Navbar_Home.svg" alt="" />
          Overview
        </div>
        <div
          className={`menu-item ${clicked === "Patients" ? "selected" : ""}`}
          onClick={() => setClicked("Patients")}>
          <img src="../src/assets/Navbar_Patients.svg" alt="" />
          Patients
        </div>
        <div
          className={`menu-item ${clicked === "Schedule" ? "selected" : ""}`}
          onClick={() => setClicked("Schedule")}>
          <img src="../src/assets/Navbar_Schedule.svg" alt="" />
          Schedule
        </div>
        <div
          className={`menu-item ${clicked === "Message" ? "selected" : ""}`}
          onClick={() => setClicked("Message")}>
          <img src="../src/assets/Navbar_Message.svg" alt="" />
          Message
        </div>
        <div
          className={`menu-item ${
            clicked === "Transactions" ? "selected" : ""
          }`}
          onClick={() => setClicked("Transactions")}>
          <img src="../src/assets/Navbar_Transactions.svg" alt="" />
          Transactions
        </div>
      </div>
      <div className="settings-profile">
        <div className="profile">
          <img src="../src/assets/profile.png" alt="" />
          <div className="info">
            <span>Dr. Jose Simmons</span>
            <br />
            General Practitioner
          </div>
        </div>
        <div className="settings">
          <img src="../src/assets/Navbar_Settings.svg" alt="" />
          <img src="../src/assets/Navbar_Dots.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
