import '../Css/Main.css'

function Main() {
    // Logica  ----------------------------------------------

    
    // Template  --------------------------------------------
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        {/* Elenco Task */}
                        <div className="col-5 p-3 bg-secondary shadow-lg rounded">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Linea divisoria */}
                        <div className="col-1">
                            <hr />
                        </div>

                        {/* Aggiungi task */}
                        <div className="col-5 p-3 bg-secondary bg-gradient">
                            Aggiungi Task
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
