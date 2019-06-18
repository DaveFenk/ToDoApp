import React, {Component} from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {style} from "./LoginStyles"

export default class LoginScreen extends Component{
    render(){
        return(
        <View style={style.container}>
            <Text style={style.title}>Loginscreen</Text>

            <TouchableOpacity
            style={style.loginButton}
            onPress={()=> this.props.navigation.navigate("HomeScreen")}>
                <Text style={style.buttonText}> go to HomeScreen </Text>
            </TouchableOpacity>

        </View>
        )
    }
}
