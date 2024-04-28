import { useState } from "react";

export default function Education({ viewMode }) {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [gradDate, setGradDate] = useState("");
  if (viewMode)
    return (
      <>
        <h2>Education</h2>
        <div>School Name: {schoolName}</div>
        <div>Major: {major}</div>
        <div>Graduation Date: {gradDate}</div>
      </>
    );
  return (
    <>
      <h2>Education</h2>
      <div>
        <label>
          School Name:{" "}
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Major:{" "}
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Graduation Date:{" "}
          <input
            type="date"
            value={gradDate}
            onChange={(e) => setGradDate(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
