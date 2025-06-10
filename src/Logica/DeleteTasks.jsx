function DeleteTasks ({index, tasks, setTasks}) {
    // Logica -------------------------------------
    const handleTasks = () => {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
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