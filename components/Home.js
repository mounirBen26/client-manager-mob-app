import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
const Home = ({ navigation }) => {
  return (
    <View style={styles.Parentcontainer}>
      <View >
      <Text style={{ fontSize: 17, fontFamily: "Ubuntu_500Medium" ,textAlign:"center",marginVertical:120}}>BienVenue: User!</Text>
      </View>
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={{
            fontSize: 18,
            fontFamily: "Ubuntu_500Medium",
            marginBottom: 10,
            backgroundColor: '#5F9EA0',
            color: 'white',
            padding: 25,
            textAlign: 'center',
            justifyContent: "space-between",
            borderRadius: 10,
          }}>
            <MaterialCommunityIcons name="home-search-outline" size={34} color="white" />  Consulter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Createclient')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Ubuntu_500Medium",
              marginBottom: 10,
              backgroundColor: '#72A0C1',
              color: 'white',
              padding: 25,
              borderRadius: 10,
            }}
          ><AntDesign name="plussquareo" size={30} color="white" />   Ajouter</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Parentcontainer: {
    flex: 1, 
    backgroundColor: '#B0E0E6',

  },
  container: {
    flex:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0E0E6',
    height: "50%",
    marginHorizontal: 20,
    marginVertical: 20,
    elevation: 0,
  },
})