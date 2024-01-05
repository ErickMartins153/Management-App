import { useState } from "react";
import DefaultInput from "./components/DefaultInput";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [defaultInput, setDefaultInput] = useState(true);
  const [projects, setProjects] = useState([]);

  function handleCreateProject(value) {
    setDefaultInput(value);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  return (
    <>
      <main className="flex my-2 h-screen">
        <Sidebar onClick={handleCreateProject} projects={projects} />
        <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min pt-32">
          {defaultInput && <DefaultInput onClick={handleCreateProject} />}
          {!defaultInput && (
            <NewProject
              reset={handleCreateProject}
              onSubmit={handleNewProject}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
