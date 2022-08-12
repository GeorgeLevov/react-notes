import { useState, useEffect } from "react";
import "./App.css";
import Split from "react-split";
import { nanoid } from "nanoid";
import Aside from "./components/Aside";
import Editor from "./components/Editor";

function App() {
    const noteStorage = localStorage.getItem("notes");

    const [notes, setNotes] = useState(() => JSON.parse(noteStorage) || []);

    const [currentNoteID, setCurrentNoteID] = useState(
        (notes[0] && notes[0].id) || ""
    );

    const createNewNote = () => {
        const newNote = {
            id: nanoid(),
            content: "# Note Title . . .",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteID(newNote.id);
    };

    const updateNoteText = (noteText) => {
        setNotes((noteArray) => {
            let newOrder = [];
            noteArray.map((note) => {
                note.id === currentNoteID
                    ? newOrder.unshift({ ...note, content: noteText })
                    : newOrder.push(note);
            });
            return newOrder;
        });
    };

    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== noteId);
        });
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const findCurrentNote = () =>
        notes.find((note) => note.id === currentNoteID) || notes[0];

    return (
        <div className="App">
            {notes.length > 0 ? (
                <Split
                    sizes={[30, 70]}
                    direction="horizontal"
                    className="split"
                >
                    <Aside
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteID}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />

                    <Editor
                        currentNote={findCurrentNote()}
                        updateNote={updateNoteText}
                    />
                </Split>
            ) : (
                <div className="fresh-page">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>
                        Create one now
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
