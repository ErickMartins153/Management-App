import { useState } from "react";
import DefaultInput from "./components/DefaultInput";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectInput, setProjectInput] = useState(false);

  return (
    <>
      <main className="flex my-2 h-screen">
        <Sidebar />
      </main>
    </>
  );
}

export default App;
