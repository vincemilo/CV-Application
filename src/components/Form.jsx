import GenInfo from "./GenInfo";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

export default function Form() {
  const [viewMode, setViewMode] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setViewMode(true);
  }

  function handleEdit() {
    console.log("test");
    setViewMode(false);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <GenInfo viewMode={viewMode} />
      <Education viewMode={viewMode} />
      <Experience viewMode={viewMode} />
      <div className="buttons">
        <button type="button" onClick={handleEdit}>
          Edit form
        </button>
        <button type="submit">Submit form</button>
      </div>
    </form>
  );
}
