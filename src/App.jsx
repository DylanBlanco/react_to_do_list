import Header from './Components/Header';
import Main from './Components/Main';
import './Css/App.css'

function App() {
    // Logica  ----------------------------------------------

    
    // Template  --------------------------------------------
    return (
        <>
        <div className="app">
            <div className="container">

                <Header />

                <Main />
                
            </div>
        </div>
        </>
    );
}

export default App;
