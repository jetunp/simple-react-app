import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react';

const App = () => {
  //global level state to toggle the form to add a new task
  const [showAddTask, setShowAddTask ] = useState(false)

  //global level state to manipulate with the tasks
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 4th at 1pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'May 6th at 7pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 12th at 9am',
        reminder: false,
    }
])


//Add Tasks
const addTask = (task) => {
    //generate a random id to be attached with any new task being added
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder and highlight if true
const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task
))}


  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />) : 'No tasks to be displayed!!'}
    </div>
    
  )
}

export default App;
