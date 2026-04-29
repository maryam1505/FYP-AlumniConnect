import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext';

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedTime: string;
  description: string;
  requirements: string[];
  alumniName: string;
  alumniBatch: string;
  alumniImage: any; // or { uri: string }
};

const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Opening for android Developer Intern',
    company: 'Omexa Digital Solutions',
    location: 'Remote',
    type: 'Internship',
    postedTime: '1hr',
    description: 'We are looking for a passionate Swift developer intern to join our iOS team.',
    requirements: ['Swift', 'iOS frameworks', 'Git'],
    alumniName: 'Ramanjot Singh',
    alumniBatch: 'BTech(ME) 2019',
    alumniImage: require('../assets/images/ria.jpg'),
  },
   {
    id: '2',
    title: 'Opening for Swift Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    type: 'Internship',
    postedTime: '1hr',
    description: 'We are looking for a passionate Swift developer intern to join our iOS team.',
    requirements: ['Swift', 'iOS frameworks', 'Git'],
    alumniName: 'Ramanjot Singh',
    alumniBatch: 'BTech(ME) 2019',
    alumniImage: require('../assets/images/karan.jpg'),
  },
   {
    id: '3',
    title: 'Opening for Swift Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    type: 'Internship',
    postedTime: '1hr',
    description: 'We are looking for a passionate Swift developer intern to join our iOS team.',
    requirements: ['Swift', 'iOS frameworks', 'Git'],
    alumniName: 'Ramanjot Singh',
    alumniBatch: 'BTech(ME) 2019',
    alumniImage: require('../assets/images/ria.jpg'),
  },
   {
    id: '4',
    title: 'Opening for Swift Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    type: 'Internship',
    postedTime: '1hr',
    description: 'We are looking for a passionate Swift developer intern to join our iOS team.',
    requirements: ['Swift', 'iOS frameworks', 'Git'],
    alumniName: 'Ramanjot Singh',
    alumniBatch: 'BTech(ME) 2019',
    alumniImage: require('../assets/images/samara.jpg'),
  },
  // ... other jobs with their respective alumni images
];

export default function JobsScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(SAMPLE_JOBS);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredJobs(SAMPLE_JOBS);
    } else {
      const filtered = SAMPLE_JOBS.filter(job =>
        job.title.toLowerCase().includes(text.toLowerCase()) ||
        job.company.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  const handleJobPress = (job: Job) => {
    router.push({
      pathname: '/jobDescription',
      params: {
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        type: job.type,
        postedTime: job.postedTime,
        description: job.description,
        requirements: JSON.stringify(job.requirements),
        alumniName: job.alumniName,
        alumniBatch: job.alumniBatch,
      },
    });
  };

  const renderJobCard = ({ item }: { item: Job }) => (
    <TouchableOpacity style={styles.jobCard} onPress={() => handleJobPress(item)} activeOpacity={0.7}>
      <View style={styles.cardRow}>
        {/* Alumni Avatar */}
        <Image source={item.alumniImage} style={styles.avatar} />
        <View style={styles.cardContent}>
          <View style={styles.headerRow}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.postedTime}>{item.postedTime}</Text>
          </View>
          <Text style={styles.companyName}>{item.company}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaBadge}>
              <Feather name="map-pin" size={12} color="#6B7280" />
              <Text style={styles.metaText}>{item.location}</Text>
            </View>
            <View style={styles.metaBadge}>
              <Feather name="briefcase" size={12} color="#6B7280" />
              <Text style={styles.metaText}>{item.type}</Text>
            </View>
          </View>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
          <View style={styles.alumniInfo}>
            <Feather name="user" size={12} color="#115848" />
            <Text style={styles.alumniText}>Posted by {item.alumniName} • {item.alumniBatch}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jobs and Updates</Text>
        <View style={{ width: 40 }} />
      </View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Jobs Posted..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <Text style={styles.sectionTitle}>Recently Posted by Alumni's</Text>
      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id}
        renderItem={renderJobCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No jobs found</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
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
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  iconButton: { padding: 8 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  listContent: { paddingHorizontal: 10, paddingBottom: 20 },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 2,
    marginBottom: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardRow: { flexDirection: 'row' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12, backgroundColor: '#E5E7EB' },
  cardContent: { flex: 1 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  jobTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937', flex: 1 },
  postedTime: { fontSize: 12, color: '#9CA3AF' },
  companyName: { fontSize: 14, color: '#4B5563', marginBottom: 6 },
  metaRow: { flexDirection: 'row', marginBottom: 8 },
  metaBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, marginRight: 8 },
  metaText: { fontSize: 12, color: '#6B7280', marginLeft: 4 },
  description: { fontSize: 14, color: '#374151', lineHeight: 20, marginBottom: 8 },
  alumniInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  alumniText: { fontSize: 12, color: '#115848', marginLeft: 6 },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#9CA3AF' },
});