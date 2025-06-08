import { useState } from "react"

function ManageTasks () {
    // Logica --------------------------------------------------------------
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Aggiungi nuova task
    function addTask() {
        if (newTask.trim() === "") return; // Evita task vuote
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask(""); // Pulisce il campo input
        console.log("Aggiunta Task:", newTask);
    }


    // Template ------------------------------------------------------------
    return (
        <div className="Manage-tasks">
            <div className="container">
                <div className="row">
                    <div className="color-task card">
                        <div className="card-body">
                            <div className="mb-3">
                                <div className="box-input">
                                    <label htmlFor="task">Aggiungi Task</label>
                                    <input
                                        type="text" 
                                        id="task" 
                                        placeholder="Scrivi qualcosa..."
                                        value={newTask}
                                        onChange={e => setNewTask(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-success"
                                    onClick={addTask}
                                >Aggiungi</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        {
                            tasks.map((t, index) => (
                                <li key={index}>{t}</li>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageTasks