import { useState } from "react";
import EditTasks from "../Logica/EditTasks";
import DeleteTasks from "../Logica/DeleteTasks";

function Tasks({ tasks = [], setTasks }) {
    // Logica ---------------------------------------------------
    const [editingIndex, setEditingIndex] = useState(null)


    // Template -------------------------------------------------
    return (
        <div className="Tasks mt-3">
            <div className="d-flex flex-column gap-3">
                {tasks.length === 0 ? (
                    <div className="text-muted">Nessuna task ancora...</div>
                ) : (
                    tasks.map((task, index) => (
                        <div key={index} className="color-task p-2 rounded shadow">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <input type="checkbox" />
                                </div>

                                <div className="col">
                                    {editingIndex === index ? (
                                        <EditTasks
                                            index={index}
                                            currentText={task}
                                            tasks={tasks}
                                            setTasks={setTasks}
                                            onClose={() => setEditingIndex(null)}
                                        />
                                    ) : (
                                        task
                                    )}
                                </div>

                                <div className="col d-flex gap-3 justify-content-center align-items-center">
                                    {/* Button Editing */}
                                    
                                    <button
                                        className="btn btn-primary d-flex align-items-center"
                                        onClick={() => setEditingIndex(index)}
                                    >
                                        <img
                                            src="/public/Img/pencil-square.svg"
                                            alt="pencil-square"
                                        />
                                    </button>

                                    {/* Button Delete */}
                                    <DeleteTasks 
                                        index = {index}
                                        tasks = {tasks}
                                        setTasks = {setTasks}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Tasks;
