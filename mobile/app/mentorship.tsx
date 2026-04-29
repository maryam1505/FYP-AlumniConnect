import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useDrawer } from '../app/context/DrawerContext';

export default function MentorshipScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();

  const goToNotifications = () => {
    router.push('/notifications');
  };

  const handleBecomeMentor = () => {
    // You can replace this with API call
    Alert.alert(
      'Success',
      'You are now part of the Mentorship Program!'
    );

    // Example: navigate somewhere
    // router.push('/mentorDashboard');
  };

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Feather name="menu" size={26} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mentorship Program</Text>

          <TouchableOpacity onPress={goToNotifications}>
            <Feather name="bell" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* BACK
          <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
            <Feather name="arrow-left" size={18} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity> */}

          {/* TITLE */}
          <Text style={styles.title}>Become a Mentor</Text>
          <View style={styles.divider} />

          {/* IMAGE */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          />

          {/* DESCRIPTION */}
          <Text style={styles.description}>
            Become a mentor and help students from your alma mater.
          </Text>

          <Text style={styles.longText}>
            We accomplish this through our unique network of health professionals
            and organizations committed to improving health policies and practices.
            Join Foundations in a nonprofit providing life saving medical care to
            children across the globe.
          </Text>

        </ScrollView>

        {/* BUTTON */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleBecomeMentor}
          >
            <Text style={styles.buttonText}>Become a Mentor</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    backgroundColor: '#115848',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },

//   backText: {
//     marginLeft: 6,
//     fontSize: 14,
//   },

  title: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 12,
    marginTop: 20,
    color: '#115848',
  },

  divider: {
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 12,
    marginVertical: 6,
    marginTop: 10,
  },

  bannerImage: {
    width: '92%',
    height: 160,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },

  description: {
    marginHorizontal: 12,
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
  },

  longText: {
    marginHorizontal: 12,
    marginTop: 6,
    fontSize: 13,
    color: '#555',
    lineHeight: 20
  },

  bottomContainer: {
    padding: 12,
    backgroundColor: '#F5F7FA',
  },

  button: {
    backgroundColor: '#115848',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});