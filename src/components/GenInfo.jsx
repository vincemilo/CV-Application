import { useState } from "react";

function GenInfo() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  return (
    <>
      <h1>General Info</h1>
      <div>
        <label>
          First Name:{" "}
          <input
            type="text"
            value={value.firstName}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:{" "}
          <input
            type="text"
            value={value.lastName}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email Address:{" "}
          <input
            type="email"
            value={value.email}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:{" "}
          <input
            type="number"
            value={value.phone}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}

export default GenInfo;
