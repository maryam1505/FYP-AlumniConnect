import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Modal,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext';

export default function JobDetailsScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const params = useLocalSearchParams();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  // Parse job data from navigation params
  const job = {
    id: params.id,
    title: params.title,
    company: params.company,
    location: params.location,
    type: params.type,
    postedTime: params.postedTime,
    description: params.description,
    requirements: params.requirements ? JSON.parse(params.requirements as string) : [],
    alumniName: params.alumniName,
    alumniBatch: params.alumniBatch,
  };

  const goToNotifications = () => {
    router.push('/notifications');
  };

  const handleApply = () => {
    setShowApplyModal(true);
  };

  const confirmApply = async () => {
    setIsApplying(true);
    try {
      // Here you would call your backend API to apply for the job
      // Example: await api.applyForJob(job.id);
      console.log('Applying for job:', job.id);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert(
        'Application Submitted',
        `You have successfully applied for ${job.title} at ${job.company}.`,
        [{ text: 'OK', onPress: () => setShowApplyModal(false) }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to submit application. Please try again.');
    } finally {
      setIsApplying(false);
      setShowApplyModal(false);
    }
  };

  const cancelApply = () => {
    setShowApplyModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />

      {/* Header with Menu, Title, and Notification Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
          <Feather name="bell" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.companyName}>{job.company}</Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaBadge}>
            <Feather name="map-pin" size={14} color="#6B7280" />
            <Text style={styles.metaText}>{job.location}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Feather name="briefcase" size={14} color="#6B7280" />
            <Text style={styles.metaText}>{job.type}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Feather name="clock" size={14} color="#6B7280" />
            <Text style={styles.metaText}>Posted {job.postedTime} ago</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Description</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          {job.requirements && job.requirements.map((req: string, index: number) => (
            <View key={index} style={styles.bulletPoint}>
              <Feather name="check-circle" size={16} color="#115848" />
              <Text style={styles.bulletText}>{req}</Text>
            </View>
          ))}
        </View>

        <View style={styles.alumniCard}>
          <Feather name="user" size={20} color="#115848" />
          <View style={styles.alumniInfo}>
            <Text style={styles.alumniName}>Posted by {job.alumniName}</Text>
            <Text style={styles.alumniBatch}>{job.alumniBatch}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Apply Confirmation Modal */}
      <Modal
        transparent
        visible={showApplyModal}
        animationType="fade"
        onRequestClose={cancelApply}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Application</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to apply for this position?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={cancelApply}
                disabled={isApplying}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalConfirmButton]}
                onPress={confirmApply}
                disabled={isApplying}
              >
                <Text style={styles.modalConfirmText}>
                  {isApplying ? 'Applying...' : 'Yes, Apply'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  content: { padding: 20, paddingBottom: 40 },
  jobTitle: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 4 },
  companyName: { fontSize: 16, color: '#4B5563', marginBottom: 12 },
  metaContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  metaText: { fontSize: 13, color: '#6B7280', marginLeft: 6 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#115848', marginBottom: 8 },
  description: { fontSize: 15, lineHeight: 22, color: '#374151' },
  bulletPoint: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  bulletText: { fontSize: 14, color: '#4B5563', marginLeft: 10, flex: 1 },
  alumniCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  alumniInfo: { marginLeft: 12 },
  alumniName: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
  alumniBatch: { fontSize: 12, color: '#6B7280' },
  applyButton: {
    backgroundColor: '#115848',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#1F2937', marginBottom: 12 },
  modalMessage: { fontSize: 16, textAlign: 'center', color: '#4B5563', marginBottom: 20 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  modalButton: { flex: 1, paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginHorizontal: 8 },
  modalCancelButton: { backgroundColor: '#F3F4F6' },
  modalConfirmButton: { backgroundColor: '#115848' },
  modalCancelText: { color: '#374151', fontWeight: '600' },
  modalConfirmText: { color: '#fff', fontWeight: '600' },
});