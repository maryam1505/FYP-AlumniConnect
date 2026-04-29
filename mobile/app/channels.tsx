import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useDrawer } from '../app/context/DrawerContext';

// Type for a channel item
interface ChannelItem {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageAuthor: string;
  date: string;
  memberCount: number;
}

// Sample data
const channelsData: ChannelItem[] = [
  {
    id: '1',
    name: 'CSE Batch 2018',
    lastMessage: 'Sure',
    lastMessageAuthor: 'Samara',
    date: 'Nov 22, 2023',
    memberCount: 10,
  },
  {
    id: '2',
    name: 'Homecoming 22',
    lastMessage: 'Done',
    lastMessageAuthor: 'Sukhdev',
    date: 'Nov 21, 2023',
    memberCount: 16,
  },
  {
    id: '3',
    name: 'Techno Geeks',
    lastMessage: 'Great Work !',
    lastMessageAuthor: 'Kiran',
    date: 'Nov 21, 2023',
    memberCount: 22,
  },
  {
    id: '4',
    name: 'Computers',
    lastMessage: 'Where?',
    lastMessageAuthor: 'Khushi',
    date: 'Nov 21, 2023',
    memberCount: 12,
  },
];

export default function MentorshipChannelsScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer(); // opens the side drawer
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChannels = channelsData.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderChannelItem = ({ item }: { item: ChannelItem }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => {
        // Navigate to channel chat screen (if needed)
        router.push({
          pathname: '/mentorship',
          params: { channelId: item.id, channelName: item.name },
        });
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.channelName}>{item.name}</Text>
        <Text style={styles.memberCount}>{item.memberCount} Members</Text>
      </View>
      <View style={styles.messagePreview}>
        <Text style={styles.messageText}>
          <Text style={styles.messageAuthor}>{item.lastMessageAuthor}: </Text>
          {item.lastMessage}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleNewChannel = () => {
    // Navigate to the mentorship screen (or create new channel screen)
    router.push('/mentorship');
  };

  const goToNotifications = () => {
    router.push('/notifications');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#115842" />

      {/* Header with menu, title, and notification bell */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mentorship Channels</Text>
        <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
          <Feather name="bell" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#6c757d" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search in Channels"
          placeholderTextColor="#adb5bd"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Feather name="x-circle" size={20} color="#6c757d" />
          </TouchableOpacity>
        )}
      </View>

      {/* Channels List */}
      <FlatList
        data={filteredChannels}
        keyExtractor={(item) => item.id}
        renderItem={renderChannelItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Feather name="users" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No matching channels</Text>
          </View>
        }
      />

      {/* New Channel Button */}
      <TouchableOpacity style={styles.newChannelButton} onPress={handleNewChannel}>
        <Feather name="plus-circle" size={20} color="#115842" />
        <Text style={styles.newChannelText}>New Channel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115842',
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#212529',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 80, // space for the floating button
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  channelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  memberCount: {
    fontSize: 12,
    color: '#6C757D',
    backgroundColor: '#F1F3F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  messagePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 14,
    color: '#495057',
    flex: 1,
  },
  messageAuthor: {
    fontWeight: '500',
    color: '#212529',
  },
  date: {
    fontSize: 12,
    color: '#ADB5BD',
    marginLeft: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: '#ADB5BD',
  },
  newChannelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#115842',
    gap: 8,
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  newChannelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#115842',
  },
});