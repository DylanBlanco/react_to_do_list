function ManageTasks () {
    // Logica --------------------------------------------------------------


    // Template ------------------------------------------------------------
    return (
        <div className="Manage-tasks">
            <div className="container">
                <div className="row">
                    <div className="color-task card">
                        <div className="card-body">
                            <div className="mb-3">
                                <div className="box-input">
                                    <input type="text" id="task" required />
                                    <label htmlFor="task">Aggiungi Task</label>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-success">Aggiungi</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageTasks