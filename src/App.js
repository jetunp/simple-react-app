import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useEffect, useState} from 'react';

const App = () => {
  //global level state to toggle the form to add a new task
  const [showAddTask, setShowAddTask ] = useState(false)

  //global level state to manipulate with the tasks
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

//fetch tasks
const fetchTasks = async() => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

//This will get us individual tasks so we can use it for like togg;e between reminder set or not using toggleReminder function.
//basically just an update to the indivdual task that we can use it for.
//Fetch task
const fetchTask = async(id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}


//Add Tasks
const addTask = async(task) => {
    //adds the tasks not only to the browser but to theserver as well.
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
}

//Delete task
const deleteTask = async (id) => {
    //deletes the tasks not only from the browser from the server as well.
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder and highlight if true
const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: 
      data.reminder} : task
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
