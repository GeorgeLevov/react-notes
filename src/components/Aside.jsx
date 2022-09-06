import React from "react";
import "./Aside.css";

export function Aside({
    notes,
    currentNote,
    setCurrentNoteId,
    newNote,
    deleteNote,
}) {
    const noteNodes = notes.map((note, index) => (
        <div key={note.id} id={`note_${index}`}>
            <div
                className={`note-title ${
                    note.id === currentNote.id ? "selected" : ""
                }`}
                onClick={() => setCurrentNoteId(note.id)}
            >
                <h3 className="note-legend">{note.content.split("\n")[0]}</h3>

                <button
                    className="delete-btn"
                    onClick={(event) => deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="aside">
            <div className="aside-header">
                <h2>Notes</h2>
                <button className="new-note" onClick={newNote}>
                    +
                </button>
            </div>
            {noteNodes}
        </section>
    );
}
