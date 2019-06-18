import React, {Component} from "react"
import {View, TextInput, TouchableOpacity, Text} from "react-native"
import {style} from "./Styles";
import Note from "./Note"
//NOT WORKING; NO NEW NOTES GETTING PUSHED::.....
export default class NoteForm extends Component{
    constructor(){
        super()
        this.state = {
            newNoteContent: ""
        }
        this.writeNote = this.writeNote.bind(this)


    }
    

    writeNote(){
        console.log(this.state.newNoteContent)
        this.props.addNote(this.state.newNoteContent)

        this.setState({
                    newNoteContent: "",
        })
    }

    render(){
        return(

                <View style={style.noteForm}>
                    <TextInput
                        style={{color: "black"}}
                        placeholder={"Write a new Note..."}
                        value={this.state.newNoteContent}
                        onChangeText={newNoteContent => this.setState({ newNoteContent })}
                    />
                    <TouchableOpacity
                        style={style.addNote}
                        onPress={this.writeNote}
                    >
                        <Text style={{fontWeight: "800"}}>ADD</Text>
                    </TouchableOpacity>
                </View>



        )
    }
}