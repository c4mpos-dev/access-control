import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Participant } from '@/app/components/Participant';
import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log("Botão de adicionar clicado.");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Botão de remover clicado ${name}.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Campos's party
      </Text>

      <Text style={styles.eventDate}>
        Sexta-feira, 6 de Setembro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Cauã Campos"  onRemove={() => handleParticipantRemove("Iago")}/>
      <Participant name="Davi Garutti"  onRemove={() => handleParticipantRemove("Iago")}/>
      <Participant name="Iago (de Andrade Oliveira / de Oliveira Andrade)" onRemove={() => handleParticipantRemove("Iago")}/>
      <Participant name="Dom Peso I" onRemove={() => handleParticipantRemove("Iago")}/>
    </View>
  );
}