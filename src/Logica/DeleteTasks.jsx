function DeleteTasks ({index, tasks, setTasks}) {
    // Logica -------------------------------------
    const handleTasks = () => {
        const updateTasks = tasks.filter((_, i) => i !== index);
            // _ rappresenta l'elemento corrente
            // filter() crea un nuovo array escludendo la task il cui indice è uguale a index

        setTasks(updateTasks);  // Aggiorna lo stato tasks con il nuovo array, senza la task eliminata
    };

    
    // Template -----------------------------------
    return (
        <>
            <button
                className="btn btn-danger d-flex align-items-center"
                onClick={handleTasks}
            >
                <img
                    src="/public/Img/trash.svg"
                    alt="trash"
                />
            </button>
        </>
    );
}


export default DeleteTasks;