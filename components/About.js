import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17,fontFamily:"Ubuntu_500Medium" }}>Developed by Hacene Benlazreg | 
        Mail: mounir.bmh@hotmail.fr</Text>
        <Button title="Retour" onPress={()=>navigation.navigate('Details')} />
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})