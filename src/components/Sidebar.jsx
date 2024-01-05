export default function Sidebar({ projects = ["testing", "other"] }) {
  return (
    <div className="h-screen">
      <aside className=" bg-stone-950 pl-12 pt-12 pr-6 mt-14 h-full overflow-hidden w-1/3 md:w-72 rounded-r-lg">
        <h1 className="text-xl uppercase font-bold text-stone-50">
          Your projects
        </h1>
        <div className="flex flex-col gap-4">
          <button className="bg-stone-800 hover:bg-stone-900 text-neutral-500 p-2 rounded-md mt-12 mb-8 w-32">
            + Add project
          </button>

          {projects.map((project) => (
            <button className=" hover:bg-stone-800 text-neutral-500 px-2 py-1 items-center text-start">
              {project}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
