import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {

  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)


  // LocalStorage'dan görevleri getir
  useEffect(() => {

    const savedTasks = localStorage.getItem("tasks")

    if (savedTasks) {

      setTasks(JSON.parse(savedTasks))

    }

  }, [])



  // Tasks değiştikçe LocalStorage güncelle
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    )

  }, [tasks])




  const addTask = (task) => {

    const newTask = {

      id: Date.now(),
      ...task

    }


    setTasks((prevTasks) => [

      ...prevTasks,
      newTask

    ])

  }





  const deleteTask = (id) => {

    setTasks((prevTasks) =>

      prevTasks.filter(
        (task) => task.id !== id
      )

    )

  }





  const updateTask = (updatedTask) => {

    setTasks((prevTasks) =>

      prevTasks.map((task) =>

        task.id === updatedTask.id
          ? updatedTask
          : task

      )

    )


    setEditTask(null)

  }





  const selectTask = (task) => {

    setEditTask(task)

  }




  return (

    <div className="container py-5">


      <h1 className="text-center fw-bold">

        🚀 TaskFlow

      </h1>



      <p className="text-center subtitle">

        Görevlerini oluştur, takip et ve yönet

      </p>




      <TaskForm

        addTask={addTask}

        updateTask={updateTask}

        editTask={editTask}

      />





      <TaskList

        tasks={tasks}

        deleteTask={deleteTask}

        selectTask={selectTask}

      />


    </div>

  )

}


export default App