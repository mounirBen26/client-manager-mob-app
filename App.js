import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import Createclient from './components/Createclient';

export default function App() {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DetailItem" component={DetailItem} />
        <Stack.Screen name="Createclient" component={Createclient} />
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
