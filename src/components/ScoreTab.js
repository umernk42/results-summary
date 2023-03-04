import React from "react";

function ScoreTab(props) {
  const col = props.values[3];
  const bgCol = `hsla${col.slice(3, col.length - 1)},0.2)`;
  console.log(bgCol);
  return (
    <div className="score_tab" style={{ background: `${bgCol}` }}>
      <div className="category">
        <img src={props.values[0]} />
        <h4 style={{ color: `${col}` }}>{props.values[1]}</h4>
      </div>
      <div className="scrPortion">
        <h4>{props.values[2]}</h4>
        <h4 className="TotalScore">&nbsp; / 100</h4>
      </div>
    </div>
  );
}

export default ScoreTab;
