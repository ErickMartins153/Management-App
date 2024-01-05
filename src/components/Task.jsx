export default function Task({ children, clearTask }) {
  return (
    <div className=" flex flex-row justify-between bg-gray-200 m-1 p-2  ">
      <p>{children}</p>
      <button
        className="mr-4 hover:bg-gray-300 px-4 rounded-md"
        onClick={() => clearTask(children)}
      >
        Clear
      </button>
    </div>
  );
}
