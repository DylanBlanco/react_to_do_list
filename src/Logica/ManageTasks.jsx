import { useState } from "react";

function ManageTasks({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function deleteAllTasks() {
        const confirmDelete = window.confirm("Sei sicuro di voler eliminare tutte le task?");
        if (confirmDelete) {
            setTasks([]);
        }
    }

    return (
        <div className="Manage-tasks">
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
                                onChange={(e) => setNewTask(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-3">
                        {/* Button Aggiungi */}
                        <button className="btn btn-success" onClick={addTask}>
                            Aggiungi
                        </button>

                        {/* Button Elimina tutte */}
                        {tasks.length > 0 && (  // tasks.length > 0: controlla se ci sono una o più task
                            <button className="btn btn-danger" onClick={deleteAllTasks}>
                                Elimina tutte
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTasks;
