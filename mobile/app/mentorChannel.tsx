// BecomeMentorScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BecomeMentorScreen() {
  const navigation = useNavigation();

  // Demo: get current user role from your auth context/state
  // For this example, we'll use a state variable – replace with actual logic
  const [userRole, setUserRole] = useState<'alumni' | 'student' | null>('alumni');

  const handleBecomeMentor = () => {
    if (userRole === 'alumni') {
      // Alumni can proceed
      Alert.alert(
        'Become a Mentor',
        'Thank you for your interest! Our team will review your application and get back to you soon.'
      );
      // Navigate to application form or next step
      // navigation.navigate('MentorApplication');
    } else {
      // Non-alumni cannot become a mentor
      Alert.alert(
        'Only Alumni Can Become Mentors',
        'This program is exclusively for alumni. Please verify your alumni status or contact support.'
      );
    }
  };

  const handleBottomNav = (screen: string) => {
    // Placeholder for bottom navigation – replace with actual navigation
    Alert.alert('Navigate', `Go to ${screen}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mentorship Program</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Become a Mentor Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Become a Mentor</Text>
          <Text style={styles.description}>
            Become a mentor and help students from your alammatar.
          </Text>
          <Text style={styles.description}>
            We accomplish this through our unique network of health professionals
            and organization committed to improving health policies and practices,
            Isha Foundation is a nonprofit providing life saving medical care to
            children aims at creating a long and{' '}
            <Text style={styles.moreLink} onPress={() => Alert.alert('More', 'Full description here')}>
              +more
            </Text>
          </Text>

          {/* Become a Mentor Button */}
          <TouchableOpacity style={styles.button} onPress={handleBecomeMentor}>
            <Text style={styles.buttonText}>Become a Mentor</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Custom Bottom Tab Bar (matches the image) */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => handleBottomNav('Home')} style={styles.bottomTab}>
          <Feather name="home" size={22} color="#6C757D" />
          <Text style={styles.bottomTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBottomNav('Messages')} style={styles.bottomTab}>
          <Feather name="message-circle" size={22} color="#6C757D" />
          <Text style={styles.bottomTabText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBottomNav('Search')} style={styles.bottomTab}>
          <Feather name="search" size={22} color="#6C757D" />
          <Text style={styles.bottomTabText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBottomNav('Event Calendar')} style={styles.bottomTab}>
          <Feather name="calendar" size={22} color="#6C757D" />
          <Text style={styles.bottomTabText}>Event Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBottomNav('Profile')} style={styles.bottomTab}>
          <Feather name="user" size={22} color="#6C757D" />
          <Text style={styles.bottomTabText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  placeholder: {
    width: 40, // balances the back button
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80, // space for bottom bar
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#115842',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#495057',
    marginBottom: 16,
  },
  moreLink: {
    color: '#115842',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#115842',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomTab: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  bottomTabText: {
    fontSize: 10,
    color: '#6C757D',
    marginTop: 2,
  },
});