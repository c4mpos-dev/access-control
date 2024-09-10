import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '@/app/components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState(["Cauã Campos"]);

  function handleParticipantAdd() {
    if (participants.includes("Joao")) {
      return Alert.alert("Participante existente.", "Esse nome já está cadastrada na lista.")
    }
    
    setParticipants(prevState => [...prevState, "Ana"])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante.", `Realmente deseja remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante deletado!")

      }
    ])

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