import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '@/app/components/Participant';
import { styles } from './styles';

export default function Home() {
  const participants = ["Cauã Campos", "Gavi Darutti", "Iago (de Andrade Oliveira / de Oliveira Andrade)", "Pom Deso I", "Rabriel Gosa", "Vabriel Gilela", "Lna Auísa", "Cna Alara", "Mebeca Rota", "A", "B", "C", "D", "F", "G", "H"];


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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}  
            onRemove={() => handleParticipantRemove(item)}
          />
        )}   
        showsVerticalScrollIndicator={false}    
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione pessoas a sua lista.
          </Text>
        )}                               
      />   
    </View>
  );
}