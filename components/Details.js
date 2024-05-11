import { ActivityIndicator, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
import { Octicons } from '@expo/vector-icons';

const Details = () => {
  const navigation = useNavigation();
  const [clients, setClients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsCollection = collection(db, 'clientsdb');
        const q = query(clientsCollection,orderBy('Num_contrat', 'asc'));
        const querySnapshot = await getDocs(q);
        const clientsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log('----',clientsData)
        setClients(clientsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  function handleItemPress(item) {
    navigation.navigate('DetailItem', { item });
  }

  function resetSearchInput() {
    setSearchText('');
  }

  const filteredClients = clients.filter((client) =>
    client.Num_contrat !== undefined &&
    client.intitule !== undefined &&
    client.Num_compteur !== undefined &&
    (client.Num_contrat.toString().includes(searchText) || client.intitule.toString().toLowerCase().includes(searchText.toLowerCase()) || client.Num_compteur.toString().includes(searchText) )
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Ubuntu_700Bold', fontSize: 24, marginBottom: 10 }}>Clients Manager</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Recherche"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable onPress={resetSearchInput}>
          {searchText && <MaterialIcons name="highlight-remove" size={24} color="gray" />}
        </Pressable>
      </View>
      <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 18, marginBottom: 5 }}>Items List</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredClients}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list} onPress={() => handleItemPress(item)} activeOpacity={0.5}>
              <Text style={{ fontFamily: 'Ubuntu_700Bold' }}>{item.Num_contrat}</Text>
              <Text style={{ fontFamily: 'Ubuntu_500Medium' }}>{item.intitule}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <Text style={{ fontFamily: 'Ubuntu_300Light', fontSize: 18 }}>Aucun client n'a été trouvé.</Text>}
          ListHeaderComponent={<View style={{ height: 10 }} />}
          ListFooterComponent={<View style={{ height: 10 }} />}
          style={{ maxHeight: '65%' }}
        />
      )}
      <Pressable style={{ marginVertical: 15 }} onPress={() => navigation.navigate('Createclient')}>
        <Octicons name="diff-added" size={30} color="#25A183" />
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
    borderWidth: 0,
    padding: 10,
    width: '86%',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
    paddingHorizontal: 6,
    paddingVertical: 12,
    
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#A8D0E6',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  offlineContainer: {
    backgroundColor: '#FFF3CD',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  offlineText: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 16,
    color: '#856404',
  },
});

