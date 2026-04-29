import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const EditProfileScreen: React.FC = () => {
  const router = useRouter(); // ✅ Expo Router navigation

  // --- Profile Image ---
  const [profileImage, setProfileImage] = useState<string | null>(
    'https://randomuser.me/api/portraits/men/32.jpg'
  );

  // --- Basic Information ---
  const [fullName, setFullName] = useState('Ahmed Khan');
  const [email, setEmail] = useState('ahmed.khan@example.com');
  const [phone, setPhone] = useState('+92 300 1234567');
  const [batch, setBatch] = useState('2020');
  const [department, setDepartment] = useState('Computer Science');
  const [location, setLocation] = useState('Lahore, Pakistan');

  // --- Professional Details ---
  const [jobTitle, setJobTitle] = useState('Software Engineer');
  const [company, setCompany] = useState('Google');

  // --- Skills ---
  const [skills, setSkills] = useState(['React', 'Node.js', 'MongoDB']);
  const [newSkill, setNewSkill] = useState('');

  // --- Experience ---
  const [currentlyWorking, setCurrentlyWorking] = useState(true);
  const [expCompany, setExpCompany] = useState('Google');
  const [expRole, setExpRole] = useState('Software Engineer');
  const [startYear, setStartYear] = useState('2022');
  const [endYear, setEndYear] = useState('Present');

  // --- Social Links ---
  const [linkedin, setLinkedin] = useState('linkedin.com/in/ahmedkhan');
  const [github, setGithub] = useState('github.com/ahmedkhan');
  const [portfolio, setPortfolio] = useState('ahmedkhan.dev');

  // Year picker data
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1999 + 6 }, (_, i) => (1999 + i).toString());
  const yearOptions = [...years, 'Present'];

  // --- Image Picker ---
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please allow access to your gallery to change the profile picture.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0].uri) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // --- Skill Handlers ---
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    } else if (skills.includes(newSkill.trim())) {
      Alert.alert('Duplicate', 'Skill already exists');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // --- Save Handler: navigates to home screen ---
  const handleSave = () => {
    // You can add API call or AsyncStorage persistence here
    Alert.alert('Saved', 'Profile updated!', [
      { text: 'OK', onPress: () => router.replace('/home') } // ✅ navigate to home screen
    ]);
  };

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />
      {/* Curved header */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Profile Image + Name + Profession */}
          <View style={styles.profileImageContainer}>
            <TouchableOpacity onPress={pickImage} activeOpacity={0.8}>
              <Image source={{ uri: profileImage || 'https://via.placeholder.com/120' }} style={styles.avatar} />
              <View style={styles.editIcon}>
                <Ionicons name="camera" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.profession}>
              {jobTitle} at {company}
            </Text>
          </View>

          {/* Basic Information Card */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="person-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Basic Information</Text>
            </View>

            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

            <Text style={styles.label}>Batch / Graduation Year</Text>
            <TextInput style={styles.input} value={batch} onChangeText={setBatch} keyboardType="numeric" />

            <Text style={styles.label}>Department</Text>
            <TextInput style={styles.input} value={department} onChangeText={setDepartment} />

            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.input} value={location} onChangeText={setLocation} />
          </View>

          {/* Professional Details Card */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="briefcase-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Professional Details</Text>
            </View>

            <Text style={styles.label}>Current Job Title</Text>
            <TextInput style={styles.input} value={jobTitle} onChangeText={setJobTitle} />

            <Text style={styles.label}>Company</Text>
            <TextInput style={styles.input} value={company} onChangeText={setCompany} />

            <Text style={styles.label}>Skills</Text>
            <View style={styles.skillsContainer}>
              {skills.map((skill, idx) => (
                <View key={idx} style={styles.skillChip}>
                  <Text style={styles.skillText}>{skill}</Text>
                  <TouchableOpacity onPress={() => handleRemoveSkill(skill)}>
                    <Ionicons name="close-circle" size={18} color="#115848" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.addSkillRow}>
              <TextInput
                style={[styles.input, { flex: 1, marginRight: 8 }]}
                placeholder="Add new skill"
                value={newSkill}
                onChangeText={setNewSkill}
              />
              <TouchableOpacity style={styles.addSkillButton} onPress={handleAddSkill}>
                <Text style={styles.addSkillButtonText}>+ Add Skill</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Experience Card */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="business-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Experience</Text>
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.label}>Currently Working Here</Text>
              <Switch
                value={currentlyWorking}
                onValueChange={setCurrentlyWorking}
                trackColor={{ false: '#ccc', true: '#115848' }}
                thumbColor="#fff"
              />
            </View>

            <Text style={styles.label}>Company</Text>
            <TextInput style={styles.input} value={expCompany} onChangeText={setExpCompany} />

            <Text style={styles.label}>Role</Text>
            <TextInput style={styles.input} value={expRole} onChangeText={setExpRole} />

            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Start Year</Text>
                <View style={styles.pickerContainer}>
                  <Picker selectedValue={startYear} onValueChange={setStartYear} style={styles.picker}>
                    {years.map(year => <Picker.Item key={year} label={year} value={year} />)}
                  </Picker>
                </View>
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>End Year</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={currentlyWorking ? 'Present' : endYear}
                    onValueChange={setEndYear}
                    style={styles.picker}
                    enabled={!currentlyWorking}
                  >
                    {yearOptions.map(year => <Picker.Item key={year} label={year} value={year} />)}
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          {/* Social Links Card */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="link-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Social Links</Text>
            </View>

            <Text style={styles.label}>LinkedIn</Text>
            <TextInput style={styles.input} value={linkedin} onChangeText={setLinkedin} />

            <Text style={styles.label}>GitHub</Text>
            <TextInput style={styles.input} value={github} onChangeText={setGithub} />

            <Text style={styles.label}>Portfolio</Text>
            <TextInput style={styles.input} value={portfolio} onChangeText={setPortfolio} />
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// ==================== Styles ====================
const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#115848',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#115848',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#115848',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#115848',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginTop: 12,
  },
  profession: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 1,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1e293b',
    backgroundColor: '#f8fafc',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f5f2',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#115848',
    fontWeight: '600',
    marginRight: 6,
  },
  addSkillRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addSkillButton: {
    backgroundColor: '#115848',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  addSkillButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
    marginTop: 4,
  },
  picker: {
    height: 50,
  },
  saveButton: {
    backgroundColor: '#115848',
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: 30,
  },
});

export default EditProfileScreen;