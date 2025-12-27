import React from "react";

const App = () => {
  const [title,setTitle]=React.useState("");  
  const [details,setDetails]=React.useState("");
  const [tasks,setTasks]=React.useState([]);
  const submitHandler=(e)=>{
    console.log("handlinng");
    e.preventDefault();

    const copyTask=[...tasks];
    copyTask.push({title,details});
    setTasks(copyTask);
    console.log("form submitted by",title,details)
    console.log(copyTask)
    setTitle("");
    setDetails("");
  }
  const deleteHandler=(idx)=>{
    const copyTask=[...tasks];
    copyTask.splice(idx,1);
    setTasks(copyTask);
  }
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">My Notes</h1>

      {/* Write Note Card */}
      <div className="bg-zinc-900 p-6 rounded-2xl mb-8">
        <form onSubmit={submitHandler}
        
         className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Note title"
            className="px-4 py-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea
            placeholder="Write your note here..."
            className="px-4 py-3 h-32 rounded-lg bg-black border border-zinc-700 outline-none resize-none focus:border-white"
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value);
         }}
         />

          <button
            type="submit"
            className="self-end bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition active:bg-amber-500 "
          >
            Add Note
          </button>
        </form>
      </div>

      {/* Notes Display Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Notes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Note Card */}
       {tasks.map((elem, idx) => (
  <div
    key={idx}
    className="bg-zinc-900 p-4 rounded-2xl flex flex-col justify-between"
  >
    <div>
      <h3 className="text-lg font-bold mb-2">{elem.title}</h3>
      <p className="text-zinc-300">{elem.details}</p>
    </div>

    <button
      onClick={() => deleteHandler(idx)}
      className="mt-4 self-end bg-red-600 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
    >
      Delete
    </button>
  </div>
))}


          
        </div>
      </div>
    </div>
  );
};

export default App;
