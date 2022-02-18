import StickyNotesList from "./components/StickyNotesList";
import { useState , useEffect } from "react";
import { nanoid } from "nanoid";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
// import EditNote from "./components/EditNote";

const App = () => {
  const [noteList , setNoteList] = useState([{
    id : nanoid(),
    title : "Flowers",
    text : "Flowers are beautiful. I love them.",
    author : "user1" ,
    bucketName : "Life"
},
{
    id : nanoid() ,
    title: "Chocolates" ,
    text : "These are the best friends in anxiety.",
    author : "user2" ,
    bucketName : "Life"
},
{
    id : nanoid() ,
    title: "War",
    text : "War can destroy the whole mankind. We should support peace.",
    author : "shreya",
    bucketName : "Peace"
},
{
    id : nanoid() ,
    title: "Services",
    text : "Server guests , call planners, total transport",
    author : "Rita",
    bucketName : ""
},
])


useEffect(() => {
  //localStorage.clear();
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNoteList(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(noteList)
  );
}, [noteList]);
 
function addNote(noteTitle, noteDescription , noteAuthor) {
  setNoteList((existingNotes) => [
    ...existingNotes,
    { id: nanoid() , title: noteTitle, text: noteDescription , author: noteAuthor },
  ]);
}

function deleteNote(deleteId) {
  setNoteList((existingNotes) => {
    return existingNotes.filter(function (note) {
      return note.id !== deleteId;
    });
  });
}

// function onEdit(noteTitle , noteDescription , noteAuthor , id) {
//   console.log(noteTitle);
//   const tempNotes = [...noteList];

//   const index = tempNotes.findIndex((item) => item.id === id);
//   if (index < 0) return;

//   tempNotes[index].text = noteDescription;
//   tempNotes[index].title = noteTitle;
//   tempNotes[index].author = noteAuthor;
//   setNoteList(tempNotes);
// }

// function editNote(props) {
//   console.log(props);
//   const tempNotes = [...noteList];

//     // const index = tempNotes.findIndex((item) => item.id === noteId);
//     // if (index < 0) return;

//     // return <EditNote id = {noteId} 
//     // title = {tempNotes[index].title} 
//     // text = {tempNotes[index].text}
//     // author = {tempNotes[index].author} 
//     // onEditNote = {onEdit} />
//     return <div>yo</div>
  
// }


  return <div>
    <Header />
    <CreateNote onAdd={addNote} />
    <div className="container">
      <StickyNotesList
      notes = {noteList} 
      handleDeleteNote = {deleteNote}
      // handleEditNote = {editNote}
      />
    </div>
  </div>
  
};
export default App;
