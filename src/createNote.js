import Note from "./Note";

function createNote(note) {
    return (
      <Note
        id={note.id}
        title={note.title}
        content={note.content}
        onDeleteNote={note.onDeleteNote}
      />
    );
  }
  
  export default createNote;