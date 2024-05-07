import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailItem = ({route, navigation}) => {
    const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>Contrat: {item.Num_contrat}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>Nom: {item.intitule}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>Lieu: {item.Adresse}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>N° Compteur: {item.Num_compteur}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>N° Puce: {item.Num_puce}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>Type: {item.Type}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>PMD: {item.PMD}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>TC: {item.TC}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>TP: {item.TP}</Text>
      <Text style={{ fontSize: 14,fontFamily:"Ubuntu_700Bold",marginBottom: 10 }}>Crée par: {item.user}</Text>
      <Button style={{ fontSize: 24,fontFamily:"Ubuntu_700Bold" }} icon="pencil" mode="contained" buttonColor='#25A183' onPress={() => console.log('Pressed')}>
             Modifier
      </Button>
    </View>
  )
}

export default DetailItem

const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight * 0.2,
    marginHorizontal: windowWidth * 0.08,
    flex:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    borderRadius: 5,
    backgroundColor:'#DFE6E2',
    height: windowHeight * 0.5,
  },
})