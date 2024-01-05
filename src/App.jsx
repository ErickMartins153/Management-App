import { useState } from "react";
import DefaultPage from "./components/DefaultPage";
import Sidebar from "./components/Sidebar";
import NewProjectPage from "./components/NewProjectPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [currentPage, setCurrentPage] = useState("default");
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  function handlePage(value) {
    setCurrentPage(value);
  }

  function handleNewProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function handleProjectPage(project) {
    setCurrentPage("project");
    setCurrentProject(project);
  }

  function handleDeleteProject(projectTitle) {
    setProjects((prevProjects) => [
      ...prevProjects.filter((projectObj) => projectObj.title !== projectTitle),
    ]);

    handlePage("default");
  }

  return (
    <>
      <main className="flex h-screen">
        <Sidebar
          handlePage={handlePage}
          projects={projects}
          handleProject={handleProjectPage}
        />
        <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min pt-32">
          {currentPage === "default" && <DefaultPage handlePage={handlePage} />}
          {currentPage === "newProject" && (
            <NewProjectPage
              handlePage={handlePage}
              onSubmit={handleNewProject}
            />
          )}
          {currentPage === "project" && (
            <ProjectPage
              currentProject={currentProject}
              deleteProject={handleDeleteProject}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
