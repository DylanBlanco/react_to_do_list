import '../Css/Main.css'
import Tasks from './Tasks';

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
                            <Tasks />
                        </div>

                        {/* Linea divisoria */}
                        <div className="col-1">
                            <hr />
                        </div>

                        {/* Aggiungi task */}
                        <div className="col-5 p-3 bg-secondary shadow-lg rounded">
                            Aggiungi Task
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
