import React, {Component} from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {style} from "./Styles";
import Note from "./Note"
import NoteForm from "./NoteForm"


export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            notes: [
                {id: "1", noteContent:"Note 1"},
                {id: "2", noteContent:"Note 2"}
            ]
        }
        this.addNote = this.addNote.bind(this)
    }

    addNote(note){
        const previousNotes = this.state.notes
        previousNotes.push({id: previousNotes.length + 1, noteContent: note})
        this.setState({
            notes: previousNotes
        })
    }
    render(){
        return(
            <View style={style.container}>

                <Text style={style.title}>To Do</Text>
                    {
                    this.state.notes.map((note) => {
                        return (
                            <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
                        )
                    })}
                <NoteForm addNote={this.addNote}/>

            </View>
        )
    }
}
