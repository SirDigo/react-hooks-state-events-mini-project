import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)
  

  function deleteTask(e, label){
    const newList = taskList.filter(task => task.text !== label);
    setTaskList(() => newList);
  }
  
  function handleClick(e){
    setSelectedCategory(() => e.target.value)
  }

  function onTaskFormSubmit(e, newTask, taskCategory){
    e.preventDefault()
    setTaskList(taskList => [...taskList, {
      text : newTask,
      category : taskCategory,
    }])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} deleteTask={deleteTask} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
