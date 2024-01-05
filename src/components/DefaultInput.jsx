export default function DefaultInput({ handlePage }) {
  return (
    <div className="flex flex-col gap-4 mx-auto justify-around items-center h-min pt-32">
      <img src="src\assets\no-projects.png" alt="" className="w-24 h-24" />
      <h2 className="font-bold text-2xl text-stone-800">No Project Selected</h2>
      <p className="text-stone-500 font-semibold">
        Select a project or get started with a new one
      </p>
      <button
        className="bg-stone-700 hover:bg-stone-800 text-gray-400 p-2 rounded-md"
        onClick={() => handlePage("newProject")}
      >
        Create new project
      </button>
    </div>
  );
}
