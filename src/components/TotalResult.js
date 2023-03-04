import React, { useContext,useState} from "react";
import { scoreContext } from "../App";

function TotalResult() {
  const scores = useContext(scoreContext);
  const setAvg = (scores) => {
    const sum = scores.reduce((total,curr) => {
      return total + curr[2];
    },0)
    return Math.round(sum/scores.length);
  }  
  const Avg = setAvg(scores);

  return (
    <div className="result_circle">
      <div className="circle">
        <h2>{Avg}</h2>
        <p>of 100</p>
      </div>
    </div>
  );
}

export default TotalResult;
