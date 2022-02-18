import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function EditNote(props) {
  const { state } = useLocation();
  const [titleEdit, setTitleEdit] = useState(state.title);
  const [descriptionEdit, setDescriptionEdit] = useState(state.text);
  const [authorEdit, setAuthorEdit] = useState(state.author);
  const [bucketNameEdit , setBucketNameEdit] = useState(state.bucketName)
  //console.log(state);
  const id = state.id;

  function onTitleEdit(e) {
    setTitleEdit(e.target.value);
  }

  function onDescriptionEdit(e) {
    setDescriptionEdit(e.target.value);
  }

  function onAuthorEdit(e) {
    setAuthorEdit(e.target.value);
  }

  function onEditName(e) {
    setBucketNameEdit(e.target.value);
  }

  function onEditNote() {
    //console.log(titleEdit, descriptionEdit, authorEdit, id);
    const tempNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = descriptionEdit;
    tempNotes[index].title = titleEdit;
    tempNotes[index].author = authorEdit;
    tempNotes[index].bucketName = bucketNameEdit;
    localStorage.setItem(
      'react-notes-app-data',
       JSON.stringify(tempNotes)
    );
  }

  return (
    <div>
      <input
        name="bucketName"
        placeholder="BucketName"
        onChange={onEditName}
        value={bucketNameEdit}
      />
      <input
        name="title"
        placeholder="Title"
        onChange={onTitleEdit}
        value={titleEdit}
      />
      <textarea
        name="description"
        placeholder="Description..."
        onChange={onDescriptionEdit}
        value={descriptionEdit}
      />
      <input
        name="author"
        placeholder="Author"
        onChange={onAuthorEdit}
        value={authorEdit}
      />
      <button onClick={() => onEditNote()}>SAVE</button>
    </div>
  );
}

 //export default EditNote;