import { useState } from "react";

function ManageTasks({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
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
                    <div>
                        <button className="btn btn-success" onClick={addTask}>
                            Aggiungi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTasks;
