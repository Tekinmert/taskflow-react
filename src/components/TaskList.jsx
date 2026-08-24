function TaskList({ tasks, deleteTask, selectTask }) {


  return (

    <div className="mt-5">


      <h3 className="mb-4">
        📌 Görevler ({tasks.length})
      </h3>



      {
        tasks.map((task) => (

          <div
            key={task.id}
            className="card p-4 mb-3 shadow-sm border-0"
          >


            <h5 className="fw-bold">
              {task.title}
            </h5>


            <p className="text-muted">
              {task.description}
            </p>



            <span
              className={
                task.priority === "Yüksek"
                ? "badge bg-danger"
                :
                task.priority === "Orta"
                ? "badge bg-warning text-dark"
                :
                "badge bg-success"
              }
            >

              {task.priority}

            </span>




            <div className="mt-3">


              <button
                className="btn btn-warning me-2"
                onClick={() => selectTask(task)}
              >

                ✏️ Güncelle

              </button>



              <button
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}
              >

                🗑️ Sil

              </button>


            </div>


          </div>


        ))
      }


    </div>

  )

}


export default TaskList