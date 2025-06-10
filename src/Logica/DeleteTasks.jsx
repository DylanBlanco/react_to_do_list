export default function DeleteTasks ({index, tasks, setTask}) {
    // Logica -------------------------------------
    
    // Template -----------------------------------
    return (
        <>
            <button
                className="btn btn-danger d-flex align-items-center"
            >
                <img
                    src="/public/Img/trash.svg"
                    alt="trash"
                />
            </button>
        </>
    )
}