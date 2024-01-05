export default function Sidebar({ projects, onClick }) {
  return (
    <div className="h-screen">
      <aside className=" bg-stone-950 pl-12 pt-12 pr-6 mt-14 h-full overflow-hidden w-1/3 md:w-72 rounded-r-lg">
        <h1 className="text-xl uppercase font-bold text-stone-50">
          Your projects
        </h1>
        <div className="flex flex-col gap-4">
          <button
            className="bg-stone-800 hover:bg-stone-900 text-neutral-500 p-2 rounded-md mt-12 mb-8 w-32"
            onClick={() => onClick(false)}
          >
            + Add project
          </button>

          {projects.map((project) => (
            <button
              key={project.title}
              className=" hover:bg-stone-800 text-neutral-500 px-2 py-1 items-center text-start"
            >
              {project.title}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
