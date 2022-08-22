import React, { Fragment, useState, useEffect } from "react"
import { Column } from "rbx"
import '../../styles/notes.scss'
import { push as Menu } from "react-burger-menu"
import List from '../notes/list'
import NotesServices from "../../services/notes"

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    async function fetchNotes() {
        const response = await NotesServices.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        }else{
            setNotes([])
        }
    }

    const createNote = async ()=>{
        await NotesServices.create()
        fetchNotes()
    }

    const deleteNote = async (note)=>{
        await NotesServices.delete(note._id)
        fetchNotes()
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id == id;
        })
        setCurrentNote(note);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
            <Column.Group className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <Column.Group>
                        <Column size={10} offset={1}>
                            Search...
                        </Column>
                    </Column.Group>
                    <List
                        notes={notes}
                        selectNote={selectNote}
                        current_note={current_note}
                        deleteNote={deleteNote} 
                        createNote={createNote} />
                </Menu>


                <Column size={12} className="notes-editor" id="notes-editor">
                    Editor...
                </Column>
            </Column.Group>
        </Fragment>
    )
}

export default Notes