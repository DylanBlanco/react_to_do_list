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
                                    <label htmlFor="task">Aggiungi Task</label>
                                    <input placeholder="Scrivi qualcosa..." type="text" id="task" required />
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