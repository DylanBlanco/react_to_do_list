import { useState } from "react";
import "../Css/Main.css";
import ManageTasks from "../Logica/ManageTasks";
import Tasks from "../Visual/Tasks";

function Main() {
    // Stato centralizzato
    const [tasks, setTasks] = useState([]);

    return (
        <div className="main">
            <div className="container">
                <div className="row justify-content-between">
                {/* Elenco Task */}
                <div className="box-task col-5 p-3 shadow-lg rounded overflow-auto">
                    <div className="row">
                        <h2 className="text-center">Tasks</h2>
                    </div>
                    <hr />
                    <div className="row">
                        {/* gestione della stampa */}
                        <Tasks tasks={tasks} />
                    </div>
                </div>

                {/* Linea divisoria */}
                <div className="col-2">
                    <hr />
                </div>

                {/* Aggiungi task */}
                <div className="box-task col-5 p-3 shadow-lg rounded overflow-auto">
                    <div className="row">
                        <h2 className="text-center">Manage tasks</h2>
                    </div>

                    <hr />

                    <div className="row">
                        {/* gestione delle aggiunte */}
                        <ManageTasks tasks={tasks} setTasks={setTasks} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
