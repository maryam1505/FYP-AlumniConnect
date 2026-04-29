import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext';

// Helper to get event image based on title
const getEventImage = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('sports') || titleLower.includes('meet')) {
    return 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop';
  }
  if (titleLower.includes('convocation')) {
    return 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop';
  }
  if (titleLower.includes('talk') || titleLower.includes('alumni')) {
    return 'https://images.unsplash.com/photo-1515187029135-8ee3e2ae4f7c?w=400&h=200&fit=crop';
  }
  if (titleLower.includes('workshop') || titleLower.includes('seminar')) {
    return 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop';
  }
  return 'https://picsum.photos/400/200?random=1';
};

export default function EventDetailScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const { id, title, date, description, location, featuredEvents, time } = useLocalSearchParams();

  // Default values
  const eventTitle = (title as string) || 'Winter Sports Meet';
  const eventDate = (date as string) || '20 December 2023';
  const eventTime = (time as string) || '9:30 AM Onwards';
  const eventDescription = (description as string) || 'Annual winter sports meet for students and alumni.';
  const eventLocation = (location as string) || 'Sports Ground';
  const featured = featuredEvents
    ? JSON.parse(featuredEvents as string)
    : ['Badminton Tournament', 'Cricket Tournament', 'Track Events', 'Football Tournament', 'Marathon'];

  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'maybe' | 'not' | null>(null);

  const handleRSVP = (status: 'attending' | 'maybe' | 'not') => {
    setRsvpStatus(status);
    // TODO: call API to save RSVP
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#115848" />

      {/* Header with menu, title, notification */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Details</Text>
        <TouchableOpacity onPress={() => router.push('/notifications')} style={styles.iconButton}>
          <Feather name="bell" size={22} color="#fff" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Event Title */}
        <Text style={styles.eventTitle}>{eventTitle}</Text>

        {/* Image related to title */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: getEventImage(eventTitle) }} style={styles.eventImage} />
        </View>

        {/* Featured Events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Events</Text>
          <View style={styles.featuredList}>
            {featured.map((item: string, index: number) => (
              <View key={index} style={styles.featuredItem}>
                <Feather name="award" size={18} color="#115842" style={styles.featuredIcon} />
                <Text style={styles.featuredText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Event Details (Date, Time, Location) */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Feather name="calendar" size={20} color="#115842" />
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>{eventDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Feather name="clock" size={20} color="#115842" />
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>{eventTime}</Text>
          </View>
          <View style={styles.detailRow}>
            <Feather name="map-pin" size={20} color="#115842" />
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>{eventLocation}</Text>
          </View>
        </View>

        {/* RSVP Section */}
        <View style={styles.rsvpSection}>
          <Text style={styles.sectionTitle}>RSVP</Text>
          <View style={styles.rsvpButtons}>
            <TouchableOpacity
              style={[styles.rsvpButton, styles.attendingButton, rsvpStatus === 'attending' && styles.activeButton]}
              onPress={() => handleRSVP('attending')}
            >
              <Text style={styles.rsvpButtonText}>Attending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rsvpButton, styles.maybeButton, rsvpStatus === 'maybe' && styles.activeButton]}
              onPress={() => handleRSVP('maybe')}
            >
              <Text style={styles.rsvpButtonText}>Might be Attending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rsvpButton, styles.notButton, rsvpStatus === 'not' && styles.activeButton]}
              onPress={() => handleRSVP('not')}
            >
              <Text style={styles.rsvpButtonText}>Not Attending</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{eventDescription}</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115848',
  },
  iconButton: {
    padding: 8,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 16,
    // textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#115848',
    marginBottom: 12,
  },
  featuredList: {
    backgroundColor: '#f8f9fc',
    borderRadius: 12,
    padding: 16,
  },
  featuredItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredIcon: {
    marginRight: 12,
  },
  featuredText: {
    fontSize: 16,
    color: '#333',
  },
  detailsCard: {
    backgroundColor: '#f8f9fc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 12,
    width: 70,
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  rsvpSection: {
    marginBottom: 24,
  },
  rsvpButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  rsvpButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    minWidth: 80,
    marginHorizontal: 4,
    borderWidth: 1,
  },
  attendingButton: {
    borderColor: '#4CAF50', // green
  },
  maybeButton: {
    borderColor: '#FFC107', // yellow
  },
  notButton: {
    borderColor: '#F44336', // red
  },
  activeButton: {
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#115842',
  },
  rsvpButtonText: {
    color: '#000000',
    // fontWeight: 'bold',
    fontSize: 10,
  },
  descriptionSection: {
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    backgroundColor: '#f8f9fc',
    padding: 16,
    borderRadius: 12,
  },
});