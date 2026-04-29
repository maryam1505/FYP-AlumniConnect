import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  // All settings state here
  const [settings, setSettings] = useState({
    displayProfilePicture: true,
    showBranch: true,
    showBatch: true,
    showCurrentLocation: false,
    showCurrentWorkplace: false,
    showProfessionalExperience: false,
    onlineNotification: true,
    connectRequests: true,
    protectionForInformation: false,
  });

  const update = (key: keyof typeof settings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    Alert.alert('Saved', 'Settings applied (local state only)');
  };

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="menu" size={26} color="#fff" />
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 26 }} />
        </View>

        <ScrollView style={styles.container}>
          {/* Profile Settings */}
          <Text style={styles.section}>Profile Settings</Text>
          <View style={styles.line} />

          {[
            ['Display Profile Picture', 'displayProfilePicture'],
            ['Show Branch', 'showBranch'],
            ['Show Batch', 'showBatch'],
            ['Show Current Location', 'showCurrentLocation'],
            ['Show Current Workplace', 'showCurrentWorkplace'],
            ['Show Professional Experience', 'showProfessionalExperience'],
          ].map(([label, key]) => (
            <TouchableOpacity
              key={key}
              style={styles.row}
              onPress={() =>
                update(key as keyof typeof settings, !settings[key as keyof typeof settings])
              }
            >
              <View
                style={[
                  styles.checkbox,
                  settings[key as keyof typeof settings] && styles.checkboxActive,
                ]}
              >
                {settings[key as keyof typeof settings] && (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                )}
              </View>
              <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
          ))}

          {/* Notification */}
          <Text style={styles.section}>Notification Settings</Text>
          <View style={styles.line} />

          <View style={styles.switchRow}>
            <View>
              <Text style={styles.label}>Online notification</Text>
              <Text style={styles.desc}>On email and phone</Text>
            </View>
            <Switch
              value={settings.onlineNotification}
              onValueChange={(v) => update('onlineNotification', v)}
              trackColor={{ false: '#ccc', true: '#115848' }}
            />
          </View>

          {/* Request */}
          <Text style={styles.section}>Request Settings</Text>
          <View style={styles.line} />

          <View style={styles.switchRow}>
            <View>
              <Text style={styles.label}>Connect Requests</Text>
              <Text style={styles.desc}>Allow connect requests</Text>
            </View>
            <Switch
              value={settings.connectRequests}
              onValueChange={(v) => update('connectRequests', v)}
              trackColor={{ false: '#ccc', true: '#115848' }}
            />
          </View>

          <View style={styles.switchRow}>
            <View>
              <Text style={styles.label}>Protection for information</Text>
              <Text style={styles.desc}>We protect your data with SSL</Text>
            </View>
            <Switch
              value={settings.protectionForInformation}
              onValueChange={(v) => update('protectionForInformation', v)}
              trackColor={{ false: '#ccc', true: '#115848' }}
            />
          </View>

          {/* Save */}
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f2f2f2' },

  header: {
    backgroundColor: '#115848',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  container: { padding: 16 },

  section: {
    fontSize: 18,
    fontWeight: '700',
    color: '#115848',
    marginTop: 20,
  },

  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  checkbox: {
    width: 22,
    height: 22,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxActive: {
    backgroundColor: '#115848',
  },

  label: {
    fontSize: 15,
    color: '#000',
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',

  },

  desc: {
    fontSize: 12,
    color: 'gray',
  },

  saveBtn: {
    backgroundColor: '#115848',
    alignSelf: 'center',
    paddingHorizontal: 60,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 20,
  },

  saveText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});