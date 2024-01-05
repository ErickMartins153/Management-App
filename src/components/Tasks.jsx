import { useRef, useState } from "react";
import Task from "./Task";

export default function Tasks({ currentProject }) {
  const [tasks, setTasks] = useState([]);
  const task = useRef();
  const projectTasks = currentProject.tasks;

  function handleTasks() {
    const currentTask = task.current.value;
    task.current.value = "";
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, currentTask];
      currentProject.tasks = [...updatedTasks];
      return updatedTasks;
    });
  }

  function handleClearTask(taskToRemove) {
    const updatedTasks = projectTasks.filter(
      (taskName) => taskName !== taskToRemove
    );
    currentProject.tasks = updatedTasks;
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-stone-800">Tasks</h1>
      <form
        className="flex flex-row gap-4 mb-4"
        onSubmit={(event) => {
          event.preventDefault();
          handleTasks();
        }}
      >
        <input
          type="text"
          ref={task}
          required
          className="bg-stone-200 rounded-md border border-solid border-stone-400 hover:border-stone-500 focus:outline-none"
        />
        <button type="submit" className="px-2 hover:bg-stone-200">
          Add Task
        </button>
      </form>
      {projectTasks.length > 0 ? (
        projectTasks.map((task) => {
          return (
            <Task key={task} clearTask={handleClearTask}>
              {task}
            </Task>
          );
        })
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </>
  );
}
