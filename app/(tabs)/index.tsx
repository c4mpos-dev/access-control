import { Fragment } from 'react';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Campos's party
      </Text>

      <Text style={{
        color: '#6B6B6B'
      }}>
        Sexta-feira, 6 de Setembro de 2024.
      </Text>
    </View>
  );
}