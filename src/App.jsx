import { useState } from "react";
import DefaultInput from "./components/DefaultInput";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projectInput, setProjectInput] = useState(false);

  function handleCreateProject(value) {
    setProjectInput(value);
  }

  return (
    <>
      <main className="flex my-2 h-screen">
        <Sidebar onClick={handleCreateProject} />
        <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min pt-32">
          {!projectInput && <DefaultInput onClick={handleCreateProject} />}
          {projectInput && <NewProject onClick={handleCreateProject} />}
        </div>
      </main>
    </>
  );
}

export default App;
