import { useRef, useState } from "react";
import Task from "./Task";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const task = useRef();

  function handleTasks() {
    const currentTask = task.current.value;
    task.current.value = "";
    setTasks((prevTasks) => [...prevTasks, currentTask]);
  }

  function handleClearTask(task) {
    setTasks((prevTasks) => prevTasks.filter((taskName) => taskName !== task));
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
        <input type="text" ref={task} required />
        <button type="submit" className="px-2 hover:bg-stone-200">
          Add Task
        </button>
      </form>
      {tasks.length > 0 ? (
        tasks.map((task) => {
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
