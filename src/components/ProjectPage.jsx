import { formatDate } from "../util/formatDate";
import Tasks from "./Tasks";

export default function ProjectPage({ currentProject, deleteProject }) {
  return (
    <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min">
      <div className="flex flex-col mr-64 ml-16 px-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-stone-800">
              {currentProject.title}
            </h1>
            <h2>{formatDate(currentProject.dueDate)}</h2>
            <p>{currentProject.description}</p>
          </div>
          <button onClick={() => deleteProject(currentProject.title)}>
            Delete
          </button>
        </div>
        <hr className="my-4 border-t-2 border-gray-500" />
        <Tasks currentProject={currentProject} />
      </div>
    </div>
  );
}
