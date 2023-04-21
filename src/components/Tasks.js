import Task from "./Task";

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
  return (
    <>
    {tasks.map((task)=>(
      //looping through it, outputting the component
      //and we are passing in each task as a prop
      <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      ))}
    </>
  )
}

export default Tasks;