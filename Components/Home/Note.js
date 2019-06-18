import {style} from "./Styles";
import React, {Component} from "react"
import {Text, View} from "react-native";

export default class Note extends Component {
    constructor(props) {
        super(props)
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    render(props) {
        return (
            <View style={style.noteContainer}>
                <Text style={style.noteText}>{this.noteContent}</Text>
            </View>
        )

    }


}
