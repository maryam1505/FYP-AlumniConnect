// NotificationsScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext'; // import the hook


// Define the type for a notification item
interface NotificationItem {
  id: string;
  type: 'event' | 'connection' | 'general';
  title: string;
  time: string;
  category: 'Events' | 'Connections' | 'General';
}

// Sample data with proper typing
const notificationsData: NotificationItem[] = [
  { id: '1', type: 'event', title: 'New event posted by "Department of CSE"', time: '1hr', category: 'Events' },
  { id: '2', type: 'connection', title: 'Samara Patel accepted your connect request', time: '4hr', category: 'Connections' },
  { id: '3', type: 'event', title: 'Event Reminder by Webinar hosted by "Department of CSE"', time: '5hr', category: 'Events' },
  { id: '4', type: 'connection', title: 'Abhay Singh Batch 2003 accepted your connect request', time: '5hr', category: 'Connections' },
  { id: '5', type: 'event', title: 'New event posted by "Department of EE"', time: '8hr', category: 'Events' },
  { id: '6', type: 'connection', title: 'Raman Singh Btech 2006 send you connect request', time: '9hr', category: 'Connections' },
  { id: '7', type: 'event', title: 'New event posted by "Department of CSE"', time: '11hr', category: 'Events' },
  { id: '8', type: 'connection', title: 'Raman Singh BTech(CSE) Batch 2005 send you connect request', time: '2d', category: 'Connections' },
  { id: '9', type: 'connection', title: 'Samara Patel accepted your connect request', time: '2d', category: 'Connections' },
  { id: '10', type: 'general', title: 'General announcement: Alumni meetup on Dec 10', time: '3d', category: 'General' },
];

interface NotificationsScreenProps {
  onMenuPress: () => void; // Required: function to open the custom sidebar
}

export default function NotificationsScreen({ onMenuPress }: NotificationsScreenProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Connections' | 'Events' | 'General'>('All');

  // Simply call the passed function to open the custom sidebar
    const { openDrawer } = useDrawer(); // get the function to open drawer
 

  const getFilteredNotifications = (): NotificationItem[] => {
    if (activeTab === 'All') return notificationsData;
    return notificationsData.filter(item => item.category === activeTab);
  };

  const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        {item.type === 'event' && <Feather name="calendar" size={20} color="#2C3E50" />}
        {item.type === 'connection' && <Feather name="user-plus" size={20} color="#2C3E50" />}
        {item.type === 'general' && <Feather name="bell" size={20} color="#2C3E50" />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#115842" />

      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
                 <Feather name="menu" size={28} color="#FFFFFF" />
               </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <View style={styles.tabsContainer}>
        {['All', 'Connections', 'Events', 'General'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab as typeof activeTab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={getFilteredNotifications()}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Feather name="inbox" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No notifications in this category</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115842',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  menuButton: { padding: 8 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#FFFFFF' },
  headerRightPlaceholder: { width: 40 },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  activeTab: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 12, position: 'relative' },
  tabText: { fontSize: 14, fontWeight: '500', color: '#6C757D' },
  activeTabText: { color: '#2C3E50', fontWeight: '600' },
  activeIndicator: {
    position: 'absolute',
    bottom: -1,
    height: 3,
    width: '40%',
    backgroundColor: '#2C3E50',
    borderRadius: 3,
  },
  listContent: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 20 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F3F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContainer: { flex: 1 },
  title: { fontSize: 15, fontWeight: '500', color: '#212529', marginBottom: 4 },
  time: { fontSize: 12, color: '#ADB5BD' },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  emptyText: { marginTop: 12, fontSize: 14, color: '#ADB5BD' },
});