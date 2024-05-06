import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const Createclient = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24,fontFamily:"Ubuntu_500Medium", marginBottom: 10 }}>Createclient</Text>
      <TextInput placeholder='Contrat' style={styles.searchInput}></TextInput>
      <TextInput placeholder='Compteur ' style={styles.searchInput}></TextInput>
      <TextInput placeholder='Adresse' style={styles.searchInput}></TextInput>
      <TextInput placeholder='Puce' style={styles.searchInput}></TextInput>
      <TextInput placeholder='PMD' style={styles.searchInput}></TextInput>
      <TextInput placeholder='Type' style={styles.searchInput}></TextInput>
      <TextInput placeholder='TC' style={styles.searchInput}></TextInput>
      <TextInput placeholder='TP' style={styles.searchInput}></TextInput>
      <Button title='Ajouter' color="#25A183" />
    </View>
  )
}

export default Createclient

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
})