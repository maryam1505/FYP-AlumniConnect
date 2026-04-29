import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext';

interface Alumni {
  id: string;
  name: string;
  classYear: string;
  department: string;
  position: string;
  imageUrl: string;
  isConnected: boolean;   // 👈 add this field
  // additional fields for detail screen
  degree?: string;
  batch?: string;
  location?: string;
  workplace?: string;
  recentFeed?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const alumniData: Alumni[] = [
  {
    id: '1',
    name: 'Mr. Raman Singh',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    isConnected: false,   // not connected – show Connect button
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  },
  {
    id: '2',
    name: 'Dr. Kate',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    isConnected: true,    // already connected – show Message button
    degree: 'PhD in AI',
    batch: '2005',
    location: 'Bangalore, Karnataka',
    workplace: 'Google Research',
    recentFeed: 'Looking for research collaborators in ML',
    linkedinUrl: 'https://linkedin.com/in/drkate',
    instagramUrl: 'https://instagram.com/drkate',
  },
   {
    id: '3',
    name: 'Mr. Raman Singh',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    isConnected: false,   // not connected – show Connect button
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  },
   {
    id: '4',
    name: 'Mr. Raman Singh',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    isConnected: false,   // not connected – show Connect button
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  },
   {
    id: '5',
    name: 'Mr. Raman Singh',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    isConnected: false,   // not connected – show Connect button
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  },
   {
    id: '6',
    name: 'Mr. Raman Singh',
    classYear: '2017',
    department: 'Computer Science and Engineering',
    position: 'CEO Digilocs',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    isConnected: false,   // not connected – show Connect button
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  },
  // ... other alumni with isConnected true/false
];

export default function AlumniDirectoryScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredAlumni(alumniData);
    } else {
      const filtered = alumniData.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(text.toLowerCase()) ||
          alumni.department.toLowerCase().includes(text.toLowerCase()) ||
          alumni.classYear.includes(text)
      );
      setFilteredAlumni(filtered);
    }
  };

  const goToNotifications = () => {
    router.push('/notifications');
  };

  // Navigate to the appropriate detail screen
  const handleAlumniPress = (alumni: Alumni) => {
    if (alumni.isConnected) {
      // Navigate to connected detail screen (with Message button)
      router.push({
        pathname: '/alumniDirectoryConnect', // adjust to your actual route
        params: { alumni: JSON.stringify(alumni) },
      });
    } else {
      // Navigate to non‑connected detail screen (with Connect button)
      router.push({
        pathname: '/alumniConnect', // adjust to your actual route
        params: { alumni: JSON.stringify(alumni) },
      });
    }
  };

  // Message button inside card – also navigate to chat (or detail)
  const handleMessage = (alumni: Alumni) => {
    router.push({
      pathname: '/message',
      params: { userId: alumni.id, name: alumni.name },
    });
  };

  const renderAlumniItem = ({ item }: { item: Alumni }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => handleAlumniPress(item)}   // 👈 tap on card
    >
      <View style={styles.cardRow}>
        <Image source={{ uri: item.imageUrl }} style={styles.profileImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.alumniName}>{item.name}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Class of </Text>
            <Text style={styles.detailValue}>{item.classYear}</Text>
          </View>
          <Text style={styles.departmentText}>{item.department}</Text>
          <Text style={styles.positionText}>{item.position}</Text>
        </View>
        <TouchableOpacity onPress={() => handleMessage(item)} style={styles.messageButton}>
          <Feather name="message-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />

      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alumni Directory</Text>
        <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
          <Feather name="bell" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, department, or year..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={handleSearch}
            clearButtonMode="while-editing"
          />
        </View>

        <FlatList
          data={filteredAlumni}
          keyExtractor={(item) => item.id}
          renderItem={renderAlumniItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No alumni found.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

// Styles remain exactly as you had them – no changes needed
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115848',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#fff' },
  iconButton: { padding: 8 },
  container: { flex: 1, paddingHorizontal: 10, paddingTop: Platform.OS === 'android' ? 10 : 0 },
  filterContainer: { marginBottom: 24 },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  listContent: { paddingBottom: 20 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardRow: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 16, backgroundColor: '#E5E7EB' },
  detailsContainer: { flex: 1 },
  alumniName: { fontSize: 18, fontWeight: '700', color: '#115848', marginBottom: 4 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  detailLabel: { fontSize: 14, color: '#6B7280' },
  detailValue: { fontSize: 14, fontWeight: '500', color: '#6B7280' },
  departmentText: { fontSize: 14, color: '#4B5563', marginBottom: 2 },
  positionText: { fontSize: 14, fontWeight: '500', color: '#6B7280', marginTop: 2 },
  messageButton: { padding: 8, marginLeft: 8 },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  emptyText: { fontSize: 16, color: '#9CA3AF' },
});