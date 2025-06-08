function Tasks({ tasks = [] }) {
  return (
    <div className="Tasks mt-3">
        <div className="d-flex flex-column gap-3">
            {tasks.length === 0 ? (
                <div className="text-muted">Nessuna task ancora...</div>
            ) : (
            tasks.map((task, index) => (
                <div key={index} className='color-task p-2 rounded shadow'>
                    <div className="row align-items-center">
                        <div className='col-2'>
                            <input type="checkbox" />
                        </div>

                        <div className='col'>
                        {task}
                        </div>

                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <button className='btn btn-primary d-flex align-items-center'>
                                <img src="/public/Img/pencil-square.svg" alt="pencil-square" />
                            </button>
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
