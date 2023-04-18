import { Link } from "react-router-dom";
import "./PersonCard.css";
import PersonInfo from "./PersonInfo/PersonInfo";
import axios from "axios";

export default function PersonCard({
  personId,
  person,
  managementType,
  activePerson,
  setActivePerson,
}) {
  return (
    <div
      className={`person-card-wrapper ${
        activePerson === personId ? "active" : ""
      }`}
    >
      <div
        className={`person-card ${activePerson === personId ? "active" : ""}`}
      >
        <img
          src={`https://sgostu-backend.download${person.photo.data.attributes.url}`}
          alt="Person photo"
          className="person-photo"
        />
        <div className="person-info">
          <h2 className="person-name">
            {person.name.trim() + " " + person.surname.trim()}
          </h2>
          <span className="person-role">
            {managementType === "regions" && person.regions && person.region}
            {managementType === "council" &&
              person.council &&
              person.council_role}
          </span>
          <button
            className="more-btn"
            onClick={() => {
              setActivePerson(personId);
            }}
          >
            Детальніше
          </button>
        </div>
      </div>
    </div>
  );
}
