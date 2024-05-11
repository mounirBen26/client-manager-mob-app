import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from 'firebase/firestore/lite';


const Createclient = ({navigation}) => {
  const [contrat, setContrat] = useState('');
  const [intitule, setIntitule] = useState('');
  const [compteur, setCompteur] = useState('');
  const [adresse, setAdresse] = useState('');
  const [creation, setCreation] = useState('');
  const [puce, setPuce] = useState('');
  const [pmd, setPmd] = useState('');
  const [type, setType] = useState('');
  const [tc, setTc] = useState('');
  const [tp, setTp] = useState('');

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'clientsdb'), {
        Adresse: adresse,
        CREATION: "10/05/2024", // or use the appropriate date format
        Num_contrat: contrat,
        Num_puce: puce,
        PMD: pmd,
        TC: tc,
        TP: tp,
        Type: type,
        intitule: intitule,
        user: "administrateur",
        Num_compteur: compteur, // Add this line
      });
      console.log('Document added successfully!', docRef.id, docRef);
      navigation.navigate('Details');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontFamily: "Ubuntu_500Medium", marginBottom: 10 }}>
        Créer un Nouveau client
      </Text>
      <TextInput
        placeholder="Contrat"
        style={styles.searchInput}
        value={contrat}
        onChangeText={setContrat}
      />
       <TextInput
        placeholder="Intitulé"
        style={styles.searchInput}
        value={intitule}
        onChangeText={setIntitule}
      />
      <TextInput
        placeholder="Compteur"
        style={styles.searchInput}
        value={compteur}
        onChangeText={setCompteur}
      />
      <TextInput
        placeholder="Adresse"
        style={styles.searchInput}
        value={adresse}
        onChangeText={setAdresse}
      />
      <TextInput
        placeholder="Puce"
        style={styles.searchInput}
        value={puce}
        onChangeText={setPuce}
      />
      <TextInput
        placeholder="PMD"
        style={styles.searchInput}
        value={pmd}
        onChangeText={setPmd}
      />
      <TextInput
        placeholder="Type"
        style={styles.searchInput}
        value={type}
        onChangeText={setType}
      />
      <TextInput
        placeholder="TC"
        style={styles.searchInput}
        value={tc}
        onChangeText={setTc}
      />
      <TextInput
        placeholder="TP"
        style={styles.searchInput}
        value={tp}
        onChangeText={setTp}
      />
      <Pressable
        style={{
          marginTop: 10,
          backgroundColor: '#66A5C3',
          padding: 10,
          width: '80%',
          borderRadius: 8,
          alignItems: 'center',
          padding: 15,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white', fontFamily: "Ubuntu_500Medium" }}>Ajouter</Text>
      </Pressable>
    </View>
  );
};

export default Createclient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    width: '80%',
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});