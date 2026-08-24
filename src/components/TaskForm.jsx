import { useState, useEffect } from "react"


function TaskForm({ addTask, updateTask, editTask }) {


  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("Düşük")



  useEffect(() => {

    if (editTask) {

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(editTask.title)
      setDescription(editTask.description)
      setPriority(editTask.priority)

    }

  }, [editTask])



  const handleSubmit = (e) => {

    e.preventDefault()


    const newTask = {

      id: editTask
        ? editTask.id
        : Date.now(),

      title,
      description,
      priority

    }



    if (editTask) {

      updateTask(newTask)

    } else {

      addTask(newTask)

    }



    setTitle("")
    setDescription("")
    setPriority("Düşük")

  }



  return (

    <form

      onSubmit={handleSubmit}

      className="card p-4 shadow border-0"

    >


      <h3 className="mb-4 text-center">

        📝 {editTask
          ? "Görevi Güncelle"
          : "Yeni Görev Ekle"}

      </h3>



      <div className="mb-3">


        <label className="form-label">

          Görev Başlığı

        </label>


        <input

          type="text"

          className="form-control"

          placeholder="Görev başlığı giriniz"

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

          required

        />


      </div>





      <div className="mb-3">


        <label className="form-label">

          Açıklama

        </label>


        <textarea

          className="form-control"

          rows="3"

          placeholder="Görev açıklaması giriniz"

          value={description}

          onChange={(e) =>
            setDescription(e.target.value)
          }

          required

        />


      </div>





      <div className="mb-3">


        <label className="form-label">

          Öncelik

        </label>



        <select

          className="form-select"

          value={priority}

          onChange={(e) =>
            setPriority(e.target.value)
          }

        >


          <option>Düşük</option>

          <option>Orta</option>

          <option>Yüksek</option>


        </select>


      </div>





      <button

        type="submit"

        className="btn btn-primary btn-lg"

      >

        {editTask
          ? "✏️ Görevi Güncelle"
          : "➕ Görev Ekle"}

      </button>



    </form>

  )

}


export default TaskForm