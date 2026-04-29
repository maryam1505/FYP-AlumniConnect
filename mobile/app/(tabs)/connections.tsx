import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../context/DrawerContext';

// Define the connection type with an image field
type Connection = {
  id: string;
  name: string;
  degree: string;
  batch: string;
  image: any; // can be a require() path or a URL string
};

// Sample data with images (replace with your actual images)
// For local images, use require('./path/to/image.jpg')
// For network images, use { uri: 'https://...' }
const CONNECTIONS_DATA: Connection[] = [
  {
    id: '1',
    name: 'Abhay Singh',
    degree: 'B.Tech (CSE)',
    batch: '2003',
    image: require('../../assets/images/ria.jpg'), // local image
    // OR image: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' }
  },
  {
    id: '2',
    name: 'Dhiraj Sharma',
    degree: 'B.Tech (ME)',
    batch: '2001',
    image: require('../../assets/images/karan.jpg'),
  },
  {
    id: '3',
    name: 'Ramanjeet Singh',
    degree: 'B.Tech (CSE)',
    batch: '2003',
    image: require('../../assets/images/ria.jpg'),
  },
  {
    id: '4',
    name: 'Raman Singh',
    degree: 'B.Tech (EE)',
    batch: '2005',
    image: require('../../assets/images/samara.jpg'),
  },
   {
    id: '5',
    name: 'Dhiraj Sharma',
    degree: 'B.Tech (ME)',
    batch: '2001',
    image: require('../../assets/images/karan.jpg'),
  },
  {
    id: '6',
    name: 'Ramanjeet Singh',
    degree: 'B.Tech (CSE)',
    batch: '2003',
    image: require('../../assets/images/ria.jpg'),
  },
  {
    id: '7',
    name: 'Raman Singh',
    degree: 'B.Tech (EE)',
    batch: '2005',
    image: require('../../assets/images/samara.jpg'),
  },
];

export default function ConnectionsScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConnections = CONNECTIONS_DATA.filter(conn =>
    conn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToNotifications = () => {
    router.push('/notifications');
  };

  const handleMessage = (connection: Connection) => {
    router.push({
      pathname: '/message',
      params: { userId: connection.id, name: connection.name },
    });
  };

  const renderConnection = ({ item }: { item: Connection }) => (
    <View style={styles.connectionCard}>
      {/* User Image */}
      <Image source={item.image} style={styles.avatarImage} />
      <View style={styles.connectionInfo}>
        <Text style={styles.connectionName}>{item.name}</Text>
        <Text style={styles.connectionDetail}>{item.degree}</Text>
        <Text style={styles.connectionDetail}>Batch - {item.batch}</Text>
      </View>
      <TouchableOpacity onPress={() => handleMessage(item)} style={styles.messageButton}>
        <Feather name="message-circle" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />

      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={28} color="#f0f0f0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Connect</Text>
        <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
          <Feather name="bell" size={24} color="#f0f0f0" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search in My Connections..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredConnections}
        keyExtractor={(item) => item.id}
        renderItem={renderConnection}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>No connections found</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
     backgroundColor: '#115848',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#f0f0f0' },
  iconButton: { padding: 8 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  listContent: { paddingHorizontal: 16, paddingBottom: 20 },
  connectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 0,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
     paddingVertical: 2,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#e0e0e0', // fallback while loading
  },
  connectionInfo: { flex: 1 },
  connectionName: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
  connectionDetail: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  messageButton: { padding: 8 },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#999' },
});