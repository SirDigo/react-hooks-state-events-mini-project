import React from "react";

function Task({  deleteTask, text, category }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={ e => deleteTask(e, text)}>X</button>
    </div>
  );
}

export default Task;
