import { colors } from "@material-ui/core";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const StickyNote = ({
  id,
  key,
  title,
  text,
  author,
  handleDeleteNote,
  handleEditNote,
}) => {
  const navigate = useNavigate();
  return (
    <div className="note" onClick={() => handleEditNote(id)}>
      <h1>{title}</h1>
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
              state: { id, title, text, author },
            })
          }
        >
          hello
        </button>
      </div>
    </div>
  );
};

export default StickyNote;
