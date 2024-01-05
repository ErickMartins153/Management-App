import { useState } from "react";
import DefaultInput from "./components/DefaultInput";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [currentPage, setCurrentPage] = useState("default");
  const [projects, setProjects] = useState([]);

  function handlePage(value) {
    setCurrentPage(value);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  return (
    <>
      <main className="flex my-2 h-screen">
        <Sidebar handlePage={handlePage} projects={projects} />
        <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min pt-32">
          {currentPage === "default" && (
            <DefaultInput handlePage={handlePage} />
          )}
          {currentPage === "newProject" && (
            <NewProject handlePage={handlePage} onSubmit={handleNewProject} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
