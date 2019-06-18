import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: '#FFF',
        margin: 10,
    },
    homeButton: {
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "black",
        fontWeight: "600",
        alignItems: "center"
    },
    noteContainer: {
        height: 80,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        opacity: 0.7
    },
    noteText: {
        color: "black",
    },
    noteForm: {
        backgroundColor: "white",
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        position: "absolute",
        bottom: 1,
        left: 10,
        right: 10,
    },
    addNote:{
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        width: 50,

    }

});



export {style}