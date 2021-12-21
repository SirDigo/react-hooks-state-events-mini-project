import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {

  const [newTask, setNewTask] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code")

  function handleNewTask(e){
    setNewTask(e.target.value)
    // console.log(newTask)
  }

  function handleTaskCategory(e){
    setTaskCategory(e.target.value)
    // console.log(taskCategory)?\
  }

  return (
    <form onSubmit={e => onTaskFormSubmit(e, newTask, taskCategory)} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select onChange={handleTaskCategory} name="category">
          {categories.map(category => category !== "All" ? 
          <option  value={category} key={category}>{category}</option> : false
        )}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
