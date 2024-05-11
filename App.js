import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import Createclient from './components/Createclient';
import About from './components/About';
import Home from './components/Home';
export default function App() {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#B0E0E6',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'Ubuntu_700Bold',
        },
        
      }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign: 'center',headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerTitleAlign: 'center',title:'Liste Des Clients', fontFamily:"Ubuntu_400Regular"}} />
        <Stack.Screen name="DetailItem" component={DetailItem} options={{headerTitleAlign: 'center',title:'Détail Du Client', fontFamily:"Ubuntu_400Regular"}}/>
        <Stack.Screen name="Createclient" component={Createclient} options={{headerTitleAlign: 'center',title:'Ajouter Un Client', fontFamily:"Ubuntu_400Regular"}} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
