import React, { useState} from 'react';

function Input({ onAddNote, notes }) {

    const [noteContent, setNoteContent] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { value, name } = event.target;
    
        setNoteContent((prevValue) => {
          if (name === "title") {
            return {
              title: value,
              content: prevValue.content
            };
          } else if (name === "content") {
            return {
                title: prevValue.title,
                content: value
            };
          }
        });
      }
    
    function handleSave() {
        let newElementKey = 0;
        if(notes.length!=0){
            newElementKey = notes[notes.length - 1].id
        }

        const newNote = {
            id: newElementKey+1,
            title: noteContent.title,
            content: noteContent.content
        };
        onAddNote(newNote);
        setNoteContent({title:"", content:""});
        
    }


    return (
        <div>
        <div>
            <input className='input-default'
            type="text"
            name="title"
            onChange={handleChange}
            value = {noteContent.title}
            placeholder="Enter Title of the note..."
            style={{ fontSize: '20px' }}
            />

        </div>
        <div>
            <textarea
                className='input-body'
                type="text"
                value = {noteContent.content}
                name="content"
                onChange={handleChange}
                placeholder="Body..."
                style={{ fontSize: '20px' }} 
            />
            <button className='add-button' onClick={handleSave} disabled={noteContent.title =="" || noteContent.content ==""}>Save Note</button>
        </div>
        </div>

    );
  }
  
  export default Input;