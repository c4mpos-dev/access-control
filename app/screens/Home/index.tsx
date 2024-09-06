import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Campos's party
      </Text>

      <Text style={styles.eventDate}>
        Sexta-feira, 6 de Setembro de 2024.
      </Text>
    </View>
  );
}