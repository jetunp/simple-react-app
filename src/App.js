import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';

const App = () => {
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
     <Header title = "Task Tracker" />
     {tasks.length>0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />) : 'Not tasks to be displayed!!'}
    </div>
    
  )
}

export default App;
