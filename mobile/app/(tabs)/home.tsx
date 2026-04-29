import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../context/DrawerContext';

// ---------- Dummy Data ----------
const batchmates = [
  {
    id: '1',
    name: 'Samara Patel',
    degree: 'B.Tech (CSE)',
    year: '2002',
    image: require('../../assets/images/samara.jpg'),
  },
  {
    id: '2',
    name: 'Karan Gill',
    degree: 'B.Tech (ME)',
    year: '2002',
    image: require('../../assets/images/karan.jpg'),
  },
  {
    id: '3',
    name: 'Ria Kapoor',
    degree: 'B.Tech (CSE)',
    year: '2002',
    image: require('../../assets/images/ria.jpg'),
  },
  {
    id: '4',
    name: 'Karan Gill',
    degree: 'B.Tech (ME)',
    year: '2002',
    image: require('../../assets/images/karan.jpg'),
  },
  {
    id: '5',
    name: 'Samara Patel',
    degree: 'B.Tech (CSE)',
    year: '2002',
    image: require('../../assets/images/samara.jpg'),
  },
];

const newsUpdates = [
  {
    id: '1',
    title:
      'College Conducted Successful Workshop on “Artificial Intelligence and Machine Learning”.......',
    image: require('../../assets/images/workshop.jpg'),
  },
  {
    id: '2',
    title:
      'Jasmeen Kaur Final Year CS Student wins Horse Riding Tournament held in Delhi.......',
    image: require('../../assets/images/horse_racing.jpg'),
  },
  {
    id: '3',
    title:
      'College Conducted Successful Workshop on “Artificial Intelligence and Machine Learning”.......',
    image: require('../../assets/images/workshop.jpg'),
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Annual Convocation Ceremony',
    date: '25 January',
    description: 'to be held in presence of SDO',
  },
  {
    id: '2',
    title: 'Annual Convocation Ceremony',
    date: '5 March',
    description: 'to be held in presence of SDO',
  },
  {
    id: '3',
    title: 'Annual Convocation Ceremony',
    date: '25 December',
    description: 'to be held in presence of SDO',
  },
];

// ---------- Components ----------
const BatchmateCard = ({ item }: { item: typeof batchmates[0] }) => {
  const router = useRouter();

  const handleConnect = () => {
    // Navigate to the connect screen (non‑connected detail) with the batchmate’s data
    router.push({
      pathname: '/alumniConnect',
      params: { alumni: JSON.stringify(item) },
    });
  };

  return (
    <View style={styles.batchmateCard}>
      <View style={styles.batchmateImageContainer}>
        <Image source={item.image} style={styles.batchmateImage} />
        <TouchableOpacity style={styles.plusButton} onPress={handleConnect}>
          <Feather name="plus" size={10} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.batchmateName}>{item.name}</Text>
        <Text style={styles.batchmateDegree}>
          {item.degree} {item.year}
        </Text>
      </View>
    </View>
  );
};

const NewsCard = ({
  item,
  onPress,
}: {
  item: typeof newsUpdates[0];
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.newsCard} onPress={onPress} activeOpacity={0.7}>
    <Image source={item.image} style={styles.newsImage} />
    <View style={styles.newsContent}>
      <Text style={styles.newsTitle} numberOfLines={3} ellipsizeMode="tail">
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const EventCard = ({ item, onPress }: { item: typeof upcomingEvents[0]; onPress: () => void }) => (
  <TouchableOpacity style={styles.eventCard} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.eventDateContainer}>
      <Text style={styles.eventDate}>{item.date}</Text>
    </View>
    <View style={styles.eventDetails}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

export default function AlumniProfileScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();

  const handleNewsPress = (newsItem: typeof newsUpdates[0]) => {
    router.push({
      pathname: '/jobDescription',       // create this screen if needed
      params: {
        id: newsItem.id,
        title: newsItem.title,
        image: JSON.stringify(newsItem.image), // pass image source
      },
    });
  };

  const handleEventPress = (event: typeof upcomingEvents[0]) => {
    router.push({
      pathname: '/eventDetail',
      params: {
        id: event.id,
        title: event.title,
        date: event.date,
        description: event.description,
      },
    });
  };

  const handleAvatarPress = () => {
    router.push('/profile'); // navigate to the user’s own profile
  };

  const handleNotificationPress = () => {
    router.push('/notifications');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Feather name="menu" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotificationPress} style={styles.iconButton}>
          <Feather name="bell" size={24} color="#FFFFFF" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Greeting Section (Avatar + Hello) – Avatar now tappable */}
      <View style={styles.greetingContainer}>
        <TouchableOpacity onPress={handleAvatarPress} activeOpacity={0.7}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>R</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.greetingTextContainer}>
          <Text style={styles.greeting}>Hello! Raman</Text>
          <Text style={styles.subGreeting}>
            Stay connected with your alma mater!
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Batchmates Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.new]}>
            Connect with your Batchmates
          </Text>
          <View style={styles.line} />
          <FlatList
            data={batchmates}
            renderItem={({ item }) => <BatchmateCard item={item} />}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.batchmateList}
          />
        </View>

        {/* News & Updates Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jobs and Updates</Text>
          <View style={styles.line} />
          <FlatList
            data={newsUpdates}
            renderItem={({ item }) => (
              <NewsCard item={item} onPress={() => handleNewsPress(item)} />
            )}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newsCardList}
          />
        </View>

        {/* Upcoming Events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.line} />
          {upcomingEvents.map((item) => (
            <EventCard key={item.id} item={item} onPress={() => handleEventPress(item)} />
          ))}
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- Styles (unchanged from your original) ----------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115842',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuButton: { padding: 8 },
  iconButton: { padding: 8 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#FFFFFF' },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  greetingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 10,
  },
  greetingTextContainer: { flexDirection: 'column', justifyContent: 'center' },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#115842',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  greeting: { fontSize: 20, fontWeight: 'bold', color: '#000000' },
  subGreeting: { fontSize: 12, color: '#666' },
  section: { paddingHorizontal: 10, marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 6, paddingHorizontal: 7 },
  new: { marginTop: 10 },
  line: { borderBottomColor: '#00022c', borderBottomWidth: 1, width: '95%', alignItems: 'center', marginLeft: 7 },
  batchmateList: { padding: 0, flexDirection: 'row', gap: 10 },
  batchmateCard: {
    width: 77,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginTop: 12,
    marginBottom: 10,
    position: 'relative',
  },
  batchmateImageContainer: {
    width: '100%',
    height: 70,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  batchmateImage: { width: '100%', height: '100%', objectFit: 'cover' },
  plusButton: {
    position: 'absolute',
    bottom: 55,
    right: 1,
    backgroundColor: '#115842',
    width: 15,
    height: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#115842',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  description: { paddingHorizontal: 1 },
  batchmateName: { fontSize: 12, fontWeight: '600', color: '#333', textAlign: 'center' },
  batchmateDegree: { fontSize: 10, color: '#666', marginTop: 2, textAlign: 'center' },
  newsCardList: { paddingHorizontal: 1, gap: 10, marginBottom: 10 },
  newsCard: {
    width: 160,
    backgroundColor: '#f8f8f8',
    borderRadius: 2,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginTop: 12,
  },
  newsImage: { width: '100%', height: 100, backgroundColor: '#ccc' },
  newsContent: { padding: 12 },
  newsTitle: { fontSize: 14, color: '#333', lineHeight: 15 },
  eventCard: {
    flexDirection: 'column-reverse',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 4,
    overflow: 'hidden',
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#115842',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginTop: 8,
  },
  eventDateContainer: { justifyContent: 'center', marginRight: 16 },
  eventDate: {
    fontSize: 16,
    textAlign: 'right',
    color: '#115842',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  eventDetails: { flex: 1 },
  eventTitle: { fontSize: 16, fontWeight: '600', color: '#3f3f3f', marginBottom: 4 },
  eventDescription: { fontSize: 14, color: '#979595' },
});