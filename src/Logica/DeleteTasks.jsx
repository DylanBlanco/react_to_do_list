export default function DeleteTasks ({index, tasks, setTask}) {
    // Logica -------------------------------------
    const handleTasks = () => {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTask(updateTasks);
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
    )
}