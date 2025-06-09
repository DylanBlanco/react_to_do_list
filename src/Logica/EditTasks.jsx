import { useState } from "react";

function EditTasks ({currentText, tasks, index, setTasks, onClose}) {
    // Logica  ------------------------------------------------
    const [editedText, setEditedText] = useState(currentText);

    // Salva le modifiche di una task quando clicchi su "Salva" 
    const handleSave = () => {
        if (editedText.trim() === "")  // Controlla che il campo modificato non sia vuoto.
            return;

        const updateTasks = [...tasks];
        updateTasks[index] = editedText;
        setTasks(updateTasks);
        onClose(); // Chiude il form di modifica
    }


    // Template  ----------------------------------------------
    return (
        <div className="edit-task mt-2">
            <input
                type="text"
                className="form-control mb-2"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            <div className="d-flex gap-3">

                <button className="btn btn-success" onClick={handleSave}>
                    Salva
                </button>

                <button className="btn btn-secondary" onClick={onClose}>
                    Annulla
                </button>
            </div>
        </div>
    );
}

export default EditTasks