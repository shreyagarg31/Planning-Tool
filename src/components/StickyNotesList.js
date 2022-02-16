import StickyNote from "./StickyNote";


const StickyNotesList = ({notes , handleDeleteNote , handleEditNote}) => {
    
    return <div className="notes-list"> 
        {
            notes.map((note)=> (
                console.log(note.id),
                <StickyNote id = {note.id}
                 key = {note.id}
                 title = {note.title}
                 text = {note.text}
                 author = {note.author}
                 handleDeleteNote = {handleDeleteNote}
                 handleEditNote = {handleEditNote} />
            ))
        }
    </div>
};

export default StickyNotesList;