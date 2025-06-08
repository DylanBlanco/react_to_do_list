import { useState } from "react"

function ManageTasks () {
    // Logica --------------------------------------------------------------
    const [task, setTask] = useState([]);

    function addTask() {
        setTask(t => [...t, 'task'])
        console.log("Aggiunta Task")
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
                                        // value={newTask}
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={addTask}>Aggiungi</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        {task}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageTasks