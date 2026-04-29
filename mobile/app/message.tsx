import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useDrawer } from '../app/context/DrawerContext';

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  image: string;
  isRead: boolean;
}

const dummyMessages: Message[] = [
  {
    id: '1',
    name: 'Samara Patel',
    message: 'Sure...',
    time: 'Nov 27, 2023',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    isRead: false,
  },
  {
    id: '2',
    name: 'Sukhdev Singh',
    message: 'Ok',
    time: 'Nov 21, 2023',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    isRead: true,
  },
  {
    id: '3',
    name: 'Kiran Gill',
    message: 'Hello! How are you?',
    time: 'Nov 17, 2023',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    isRead: false,
  },
  {
    id: '4',
    name: 'Khushi Sharma',
    message: 'Let’s meet tomorrow',
    time: 'Nov 15, 2023',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    isRead: true,
  },
];

export default function MessageScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();

  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'read'>('all');
  const [search, setSearch] = useState('');

  const goToNotifications = () => {
    router.push('/notifications');
  };

  // 🧭 Navigate to chat screen when a message is tapped
  const handleMessagePress = (item: Message) => {
    router.push({
      pathname: '/chat',
      params: { 
        userId: item.id, 
        name: item.name, 
        image: item.image 
      },
    });
  };

  // 🔍 Filter logic
  const filteredMessages = dummyMessages.filter((msg) => {
    const matchesSearch = msg.name.toLowerCase().includes(search.toLowerCase());

    if (activeTab === 'unread') return !msg.isRead && matchesSearch;
    if (activeTab === 'read') return msg.isRead && matchesSearch;
    return matchesSearch;
  });

  const renderItem = ({ item }: { item: Message }) => (
    <TouchableOpacity 
      style={styles.messageCard} 
      onPress={() => handleMessagePress(item)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>{item.message}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        {!item.isRead && <View style={styles.unreadDot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Feather name="menu" size={26} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Messages</Text>

          <TouchableOpacity onPress={goToNotifications}>
            <Feather name="bell" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Feather name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search Messages"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          {['all', 'unread', 'read'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab as any)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* MESSAGE LIST */}
        <FlatList
          data={filteredMessages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },

  header: {
    backgroundColor: '#115848',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  input: {
    flex: 1,
    padding: 10,
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
  },

  activeTab: {
    backgroundColor: '#115848',
  },

  tabText: {
    color: '#333',
  },

  activeTabText: {
    color: '#fff',
  },

  messageCard: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  messageContent: {
    flex: 1,
  },

  name: {
    fontWeight: '700',
  },

  text: {
    color: '#666',
    fontSize: 13,
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  time: {
    fontSize: 11,
    color: '#999',
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#115848',
    marginTop: 6,
  },
});