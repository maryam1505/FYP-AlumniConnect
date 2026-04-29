import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AlumniProfile: React.FC = () => {
  // State for followers
  const [followers, setFollowers] = useState<number>(245);

  // Handle follow action
  const handleFollow = () => {
    setFollowers(prev => prev + 1);
    Alert.alert('Followed', 'You are now following Ahmed Khan');
  };

  // Handle message action
  const handleMessage = () => {
    Alert.alert('Message', 'Messaging feature coming soon!');
  };

  // Profile data
  const profile = {
    name: 'Ahmed Khan',
    title: 'Software Engineer',
    company: 'Google',
    location: 'Lahore, Pakistan',
    email: 'ahmed.khan@email.com',
    phone: '+92 312 3456789',
    batch: '2020',
    department: 'Computer Science',
    skills: 'React, Node.js, MongoDB, JavaScript, TypeScript, AWS',
    experiences: [
      {
        company: 'Google',
        years: '2022 - Present',
        title: 'Software Engineer',
        description: [
          'Top Developer Award 2023 – Google',
          '1st Position – National Hackathon 2019',
          'Published Open Source Project with 1k+ Stars',
        ],
      },
      {
        company: 'Systems Limited',
        years: '2020 - 2022',
        title: 'Frontend Developer',
        description: [
          'Built reusable component libraries',
          'Optimized performance by 35%',
        ],
      },
    ],
    achievements: [
      '🏆 Top Developer Award 2023 – Google',
      '🥇 1st Position – National Hackathon 2019',
      '⭐ Open Source Project with 1k+ Stars',
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmed-khan',
      github: 'https://github.com/ahmedkhan',
      portfolio: 'https://ahmedkhan.dev',
    },
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => Alert.alert('Error', 'Cannot open link'));
  };

  return (
    <>
      <StatusBar backgroundColor="#115848" barStyle="light-content" />
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Alumni Profile</Text>
        
      </View>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
       
        <ScrollView showsVerticalScrollIndicator={false}>
         {/* Profile Header */}
         <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.profession}>
              {profile.title} at {profile.company}
            </Text>
            <Text style={styles.location}>{profile.location}</Text>
          </View>

          {/* Basic Info with Icon */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="person-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Basic Information</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{profile.email}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{profile.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Batch:</Text>
              <Text style={styles.value}>{profile.batch}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Department:</Text>
              <Text style={styles.value}>{profile.department}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Location:</Text>
              <Text style={styles.value}>{profile.location}</Text>
            </View>
          </View>

          {/* Professional Details with Icon */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="briefcase-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Professional Details</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Job Title:</Text>
              <Text style={styles.value}>{profile.title}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Company:</Text>
              <Text style={styles.value}>{profile.company}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Skills:</Text>
              <Text style={styles.value}>{profile.skills}</Text>
            </View>
          </View>

          {/* Experience with Icon */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="business-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Experience</Text>
            </View>
            {profile.experiences.map((exp, idx) => (
              <View key={idx} style={styles.expItem}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.years}>
                  {exp.years} · {exp.title}
                </Text>
                {exp.description.map((desc, i) => (
                  <View key={i} style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.descText}>{desc}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* Achievements with Icon */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="trophy-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Achievements</Text>
            </View>
            {profile.achievements.map((item, idx) => (
              <Text key={idx} style={styles.achievementText}>
                {item}
              </Text>
            ))}
          </View>

          {/* Connect with Icon */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="link-outline" size={22} color="#115848" />
              <Text style={styles.sectionTitle}>Connect</Text>
            </View>
            <View style={styles.socialRow}>
              <TouchableOpacity onPress={() => openLink(profile.socialLinks.linkedin)}>
                <Text style={styles.socialLink}>🔗 LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(profile.socialLinks.github)}>
                <Text style={styles.socialLink}>🐙 GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(profile.socialLinks.portfolio)}>
                <Text style={styles.socialLink}>🌐 Portfolio</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Buttons: Follow & Message */}
          <View style={styles.bottomButtonsContainer}>
            <View style={styles.followerBadge}>
              <Ionicons name="people" size={18} color="#115848" />
              <Text style={styles.followerCount}>{followers} followers</Text>
            </View>
            <TouchableOpacity style={styles.followBtn} onPress={handleFollow}>
              <Ionicons name="person-add" size={20} color="#fff" />
              <Text style={styles.btnText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageBtn} onPress={handleMessage}>
              <Ionicons name="chatbubble-ellipses" size={20} color="#115848" />
              <Text style={[styles.btnText, { color: '#115848' }]}>Message</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#115848',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
 profileHeader: {
  alignItems: 'center',
  marginBottom: 16,
  paddingHorizontal: 20,
  backgroundColor: '#115848',
  // borderBottomLeftRadius: 50,
  // borderBottomRightRadius: 50,
  overflow: 'hidden',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#115848',
    marginBottom: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
  },
  profession: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#fff',
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
    marginBottom: 14,
    // borderLeftWidth: 3,
    // borderLeftColor: '#115848',
    // paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  label: {
    width: 95,
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: '#1e293b',
  },
  expItem: {
    marginBottom: 16,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  years: {
    fontSize: 13,
    color: '#64748b',
    marginVertical: 4,
  },
  bullet: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 6,
  },
  bulletDot: {
    fontSize: 14,
    color: '#115848',
    marginRight: 8,
    fontWeight: 'bold',
  },
  descText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
  },
  achievementText: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
    fontWeight: '500',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  socialLink: {
    fontSize: 15,
    fontWeight: '600',
    color: '#115848',
  },
  bottomButtonsContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
    marginTop: 8,
    alignItems: 'center',
  },
  followerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f5f2',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 40,
    marginBottom: 16,
  },
  followerCount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#115848',
    marginLeft: 6,
  },
  followBtn: {
    backgroundColor: '#115848',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 40,
    width: '100%',
    marginBottom: 12,
  },
  messageBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 40,
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#115848',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  bottomSpacer: {
    height: 20,
  },
});

export default AlumniProfile;