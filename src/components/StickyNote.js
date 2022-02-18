import { colors } from "@material-ui/core";
import Draggable from "react-draggable";
//import { Draggable, Droppable } from 'react-drag-and-drop'
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const StickyNote = ({
  id,
  key,
  title,
  text,
  author,
  bucketName,
  handleDeleteNote
}) => {
  const navigate = useNavigate();
  return (
    <Draggable>
    <div className="note" >
      <h1 className="box">{bucketName}</h1>
      <h2>{title}</h2>
      <span>{text}</span>
      <div className="note-footer">
        <small>{author}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.2em"
        />
        <button
          onClick={() =>
            navigate("/editNote", {
              state: { id, title, text, author , bucketName},
            })
          }
        >
          Edit
        </button>
      </div>
    </div>
    </Draggable>
  )
}

export default StickyNote;
