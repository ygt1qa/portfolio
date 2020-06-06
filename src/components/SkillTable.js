import React from "react";

const SkillTable = (props) => {
  const Skills = props.table.map((data) => {
    let star = "";
    for (let i = 0; i < data.score; i++) {
      star += "★";
    }
    return (
      <tr>
        <th>{data.name}</th>
        <td data-label="experience" className="experience">
          <span>{data.experience + " years"}</span>
        </td>
        <td data-label="score" className="score">
          {star}
        </td>
      </tr>
    );
  });

  return (
    <table className="skill__table">
      <thead>
        <tr>
          <td></td>
          <th scope="col">
            <button onClick={props.handleExperienceSort}>Experience</button>
          </th>
          <th scope="col">
            <button onClick={props.handleScoreSort}>Scores</button>
          </th>
        </tr>
      </thead>
      <tbody>{Skills}</tbody>
    </table>
  );
};
export default SkillTable;
