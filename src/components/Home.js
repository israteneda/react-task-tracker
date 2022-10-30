import AddTask from "./AddTask";
import Tasks from "./Tasks";

function Home({ tasks, showAddTask, addTask, deleteTask, toggleReminder }) {
  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </>
  );
}

export default Home;
