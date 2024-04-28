import { useState } from "react";

export default function Experience({ viewMode }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  if (viewMode)
    return (
      <>
        <h2>Experience</h2>
        <div>Company Name: {company}</div>
        <div>Position: {position}</div>
        <div>Responsibilities: {responsibilities}</div>
        <div>Start Date: {startDate}</div>
        <div>End Date: {endDate}</div>
      </>
    );
  return (
    <>
      <h2>Experience</h2>
      <div>
        <label>
          Company Name:{" "}
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Position:{" "}
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Responsibilities:{" "}
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
