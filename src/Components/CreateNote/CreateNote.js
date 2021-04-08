import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import "./CreateNote.css"
const CreateNote = (props) => {
    const[expanded,setExpanded]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:""
    })
    const change=()=>{
        setExpanded(true);
    }
    const handlechange=(event)=>{
        const{name,value}=event.target;
        setNote((prevNote)=>{return{...prevNote,[name]:value}})
    }

    const submitnote=(event)=>{
       
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        setExpanded(false);

    }
    
    return (
        <div>
            <form className="create-note">
                {expanded && <input value={note.title} name="title" placeholder="Title" onChange={handlechange} onFocus/>}
            <textarea value={note.content} name="content" placeholder="Take a Note.." onClick={change} 
            onChange={handlechange} rows={expanded?2:1}/>
            <Zoom in={expanded}>
                <Fab onClick={submitnote}>
                    <AddIcon/>
                </Fab>
            </Zoom>
            </form>
        </div>
    )
}

export default CreateNote
