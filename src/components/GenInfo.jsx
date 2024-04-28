import { useState } from "react";

export default function GenInfo({ viewMode }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  if (viewMode)
    return (
      <>
        <h2>General Info</h2>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
      </>
    );
  return (
    <>
      <h2>General Info</h2>
      <div>
        <label>
          First Name:{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email Address:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:{" "}
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
