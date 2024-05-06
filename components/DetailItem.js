import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailItem = ({route, navigation}) => {
    const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24,fontFamily:"Ubuntu_700Bold" }}>DetailItem: {item.contrat}</Text>
      <Button style={{ fontSize: 24,fontFamily:"Ubuntu_700Bold" }} icon="pencil" mode="contained" buttonColor='#25A183' onPress={() => console.log('Pressed')}>
             Modifier
      </Button>
    </View>
  )
}

export default DetailItem

const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight * 0.25,
    marginHorizontal: windowWidth * 0.08,
    flex:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    borderRadius: 5,


    backgroundColor:'#DFE6F6',
    height: windowHeight * 0.4
  },
})