import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, selectedCategory }) {

  const newList = tasks.filter(task => selectedCategory === "All" ? task : task.category === selectedCategory);

  return (
    <div className="tasks">
      {
        newList.map(task => <Task deleteTask={deleteTask} key={task.text} text={task.text} category={task.category}/>)
      }
    </div>
  );
}

export default TaskList;
