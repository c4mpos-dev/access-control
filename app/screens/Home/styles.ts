import { Button, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24
    },
    eventName: {
      color: '#FDFCFE',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 14
    },
    input: {
      height: 56,
      backgroundColor: "#1F1E25",
      color: "#FFFFFF",
      borderRadius: 5,
      padding: 16,
      fontSize: 16
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
      backgroundColor: "#31CF67"
    }
  });