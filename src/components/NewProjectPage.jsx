import { useRef } from "react";

export default function NewProjectPage({ handlePage, onSubmit }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          title: projectTitle.current.value,
          description: projectDescription.current.value,
          dueDate: projectDueDate.current.value,
          tasks: [],
        });
        handlePage("default");
      }}
    >
      <div className="flex-1 flex-col gap-4 mx-auto justify-around items-center h-min"></div>
      <div className="flex flex-col mr-64 ml-16">
        <div className="flex flex-row gap-2 justify-end">
          <button
            type="button"
            className="py-2 px-4 rounded-md hover:bg-stone-300"
            onClick={() => handlePage("default")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-stone-800 hover:bg-stone-950 text-stone-200 py-2 px-4 rounded-md"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-stone-700 font-semibold uppercase text-lg"
            >
              Title
            </label>
            <input
              required
              ref={projectTitle}
              type="text"
              className="bg-stone-200 p-1"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-stone-700 font-semibold uppercase text-lg"
            >
              Description
            </label>
            <textarea
              required
              ref={projectDescription}
              className="bg-stone-200"
              name="description"
              id="description"
              cols="30"
              rows="5"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="due-date"
              className="text-stone-700 font-semibold uppercase text-lg"
            >
              Due date
            </label>
            <input required ref={projectDueDate} type="date" />
          </div>
        </div>
      </div>
    </form>
  );
}
