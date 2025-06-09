import { useState } from "react";

function EditTasks ({currentText}) {
    // Logica  ------------------------------------------------
    const [editedText, setEditedText] = useState(currentText);


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