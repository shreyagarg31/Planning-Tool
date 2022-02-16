import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

const CreateNote = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [authorInput , setAuthorInput] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  function onTitleInput(e) {
    setTitleInput(e.target.value);
  }

  function onDescriptionInput(e) {
    setDescriptionInput(e.target.value);
  }

  function onAuthorInput(e) {
      setAuthorInput(e.target.value);
  }

  function onAddNote(e) {
    e.preventDefault();
    props.onAdd(titleInput, descriptionInput , authorInput);

    setTitleInput("");
    setDescriptionInput("");
    setAuthorInput("");
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div onClick={expand}>
    <form className="create-note">
      {isExpanded ? (
        <input
          name="title"
          placeholder="Title"
          onChange={onTitleInput}
          value={titleInput}
        />
      ) : null}

      <textarea
        name="description"
        placeholder="Description..."
        rows={isExpanded ? "3" : "1"}
        onChange={onDescriptionInput}
        value={descriptionInput}
      />
      {isExpanded ? (
        <input
          name="author"
          placeholder="Author"
          onChange={onAuthorInput}
          value={authorInput}
        />
      ) : null}

      <Zoom in={isExpanded ? true : false}>
        <Fab onClick={onAddNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  </div>
);

};

export default CreateNote;