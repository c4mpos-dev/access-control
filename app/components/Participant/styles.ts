import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: "#FFFFFF",
        padding: 16,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#E23C44"
    }
})