import {MdDeleteForever} from 'react-icons/md';

function Note(props) {

  const handleDeleteClick = () => {
    props.onDeleteNote(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <MdDeleteForever className="delete-button" onClick={handleDeleteClick}/>
    </div>
  );
  }
  
  export default Note;