import React from "react";
import TotalResult from "./TotalResult";

function Upper() {
  return (
    <div className="upper-portion">
      <h4>Your Result</h4>
      <TotalResult />
      <h2>Great</h2>
      <h4>
        You scored higher than 65% of the people who have taken these tests.
      </h4>
    </div>
  );
}

export default Upper;
