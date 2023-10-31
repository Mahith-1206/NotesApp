import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import notesArray from './notesArray';
import createNote from './components/createNote';

function App() {
  const [notes, setNotes] = useState(notesArray);

  const handleAddNote = (newNote) => {
    setNotes((notesArray) => [...notesArray, newNote]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const createNoteComponent = (note) => {
    return createNote({
      ...note,
      onDeleteNote: () => handleDeleteNote(note.id) // Pass onDeleteNote function
    });
  };


  return (
    <div className="index.css">
    <Header />
    <div>
      <Input onAddNote={handleAddNote} notes = {notes}/>
      <dl>{notes.map((note) => (
            createNoteComponent(note)
          ))}
      </dl>
    </div>
    <Footer />
    </div>
  );
}

export default App;
