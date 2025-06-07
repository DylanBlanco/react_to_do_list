function Tasks () {
    return (
        <div className="Tasks">
            <div className="d-flex flex-column gap-2">
                <div className='bg-success p-2 rounded'>
                    <div className="row align-items-center">
                        <div className='col-2'>
                            <input type="checkbox" />
                        </div>

                        <div className='col'>
                            Task 
                        </div>
                        
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <button className='btn btn-primary'>
                                <img src="/public/Img/pencil-square.svg" alt="pencil-square" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks