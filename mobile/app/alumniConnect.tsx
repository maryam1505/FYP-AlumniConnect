import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useDrawer } from '../app/context/DrawerContext';

interface Alumni {
  id: string;
  name: string;
  degree?: string;
  batch?: string;
  location?: string;
  workplace?: string;
  recentFeed?: string;
  imageUrl: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  classYear?: string;
  department?: string;
  position?: string;
}

export default function AlumniConnectScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const params = useLocalSearchParams();

  let alumni: Alumni | null = null;
  try {
    alumni = params.alumni ? JSON.parse(params.alumni as string) : null;
  } catch (e) {
    console.error('Failed to parse alumni data', e);
  }

  // Fallback if data is missing
  const selected = alumni || {
    id: '1',
    name: 'Mr. Raman Singh',
    degree: 'B.Tech (CSE)',
    batch: '2003',
    location: 'Mumbai, Maharashtra',
    workplace: 'Wigit Space, Mumbai, Maharashtra',
    recentFeed: 'Anyone looking to work on Mobile Application development please connect',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    linkedinUrl: 'https://linkedin.com/in/ramansingh',
    instagramUrl: 'https://instagram.com/ramansingh',
  };

  const handleConnect = () => {
    Alert.alert(
      'Connection Request',
      `Send a connection request to ${selected.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Connect',
          onPress: () => {
            // TODO: call API
            Alert.alert('Request sent', `You have connected with ${selected.name}`);
          },
        },
      ]
    );
  };

  const openSocial = (url: string) => {
    if (url) Linking.openURL(url).catch(() => Alert.alert('Error', 'Cannot open link'));
  };

  const goToNotifications = () => {
    router.push('/notifications');
  };

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Alumni Directory</Text>
          <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: selected.imageUrl }} style={styles.avatar} />
          </View>

          <Text style={styles.name}>{selected.name}</Text>
          <Text style={styles.degree}>{selected.degree || selected.department || ''}</Text>
          <Text style={styles.batch}>Batch - {selected.batch || selected.classYear || ''}</Text>

          <TouchableOpacity style={styles.connectButton} onPress={handleConnect}>
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Currently Residing In</Text>
            <Text style={styles.infoValue}>{selected.location || 'Not provided'}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Currently Working In</Text>
            <Text style={styles.infoValue}>{selected.workplace || selected.position || 'Not provided'}</Text>
          </View>

          <View style={styles.feedCard}>
            <Text style={styles.feedTitle}>Recent Feed</Text>
            <Text style={styles.feedText}>{selected.recentFeed || 'No recent feed'}</Text>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => openSocial(selected.linkedinUrl || '')} style={styles.socialIcon}>
              <Ionicons name="logo-linkedin" size={34} color="#0077b5" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocial(selected.instagramUrl || '')} style={styles.socialIcon}>
              <Ionicons name="logo-instagram" size={34} color="#e4405f" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f7fa' },
  header: {
    backgroundColor: '#115848',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // borderBottom
  },
  iconButton: { padding: 4 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  imageContainer: { alignItems: 'center', marginTop: 24, marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#115848' },
  name: { fontSize: 24, fontWeight: '800', color: '#1e293b', textAlign: 'center' },
  degree: { fontSize: 16, color: '#115848', fontWeight: '600', textAlign: 'center', marginTop: 4 },
  batch: { fontSize: 14, color: '#64748b', textAlign: 'center', marginBottom: 20 },
  connectButton: { backgroundColor: '#115848', marginHorizontal: 40, paddingVertical: 12, borderRadius: 40, alignItems: 'center', marginBottom: 24 },
  connectButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  infoCard: { backgroundColor: '#fff', borderRadius: 16, marginHorizontal: 20, marginTop: 12, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  infoLabel: { fontSize: 14, fontWeight: '600', color: '#115848', marginBottom: 4 },
  infoValue: { fontSize: 14, color: '#334155' },
  feedCard: { backgroundColor: '#fff', borderRadius: 16, marginHorizontal: 20, marginTop: 12, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  feedTitle: { fontSize: 16, fontWeight: '700', color: '#115848', marginBottom: 8 },
  feedText: { fontSize: 14, color: '#1e293b', lineHeight: 20 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', gap: 40, marginTop: 24, marginBottom: 30 },
  socialIcon: { padding: 8 },
  bottomSpacer: { height: 30 },
});