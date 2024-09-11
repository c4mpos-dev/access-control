import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '@/app/components/Participant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    loadEventDetails();
  }, []);

  useEffect(() => {
    saveEventDetails();
  }, [participants, eventName, eventDate]);

  async function loadEventDetails() {
    try {
      const storedParticipants = await AsyncStorage.getItem('participants');
      const storedEventName = await AsyncStorage.getItem('eventName');
      const storedEventDate = await AsyncStorage.getItem('eventDate');
      
      if (storedParticipants) {
        setParticipants(JSON.parse(storedParticipants));
      }
      if (storedEventName) {
        setEventName(storedEventName);
      }
      if (storedEventDate) {
        setEventDate(storedEventDate);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os detalhes do evento.");
    }
  }

  async function saveEventDetails() {
    try {
      await AsyncStorage.setItem('participants', JSON.stringify(participants));
      await AsyncStorage.setItem('eventName', eventName);
      await AsyncStorage.setItem('eventDate', eventDate);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar os detalhes do evento.");
    }
  }

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Esse nome já está cadastrada na lista.")
    }
    else if (participantName == ''){
      return Alert.alert("Nome vazio", "Digite um nome para o participante, não é possível adicionar um nome vazio.")
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Realmente deseja remover o(a) participante ${name}?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
      }
    ])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.eventName}
        placeholder='Nome do evento'
        placeholderTextColor="#6B6B6B"
        onChangeText={setEventName}
        value={eventName}
      />

      <TextInput style={styles.eventDate}
        placeholder='Data do evento'
        placeholderTextColor="#6B6B6B"
        onChangeText={setEventDate}
        value={eventDate}
      />

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
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