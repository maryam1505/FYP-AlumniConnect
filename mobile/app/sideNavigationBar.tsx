import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// Screen names must match the file names in your app/ directory (without slash)
type ScreenName =
  | 'alumniDirectory'
  | 'connections'
  | 'feed'
  | 'jobs'
  | 'channels'
  | 'mentorship'
  | 'messages'
  | 'settings';

const menuItems: { id: string; title: string; icon: any; route: ScreenName }[] = [
  { id: 'directory', title: 'Alumni Directory', icon: 'users', route: 'alumniDirectory' },
  { id: 'connections', title: 'My Connections', icon: 'user-plus', route: 'connections' },
  { id: 'feed', title: 'Feed', icon: 'rss', route: 'feed' },
  { id: 'jobs', title: 'Jobs and Updates', icon: 'briefcase', route: 'jobs' },
  { id: 'channels', title: 'My Channels', icon: 'cast', route: 'channels' },
  { id: 'mentorship', title: 'Mentorship Programs', icon: 'award', route: 'mentorship' },
  { id: 'messages', title: 'Messages', icon: 'message-circle', route: 'messages' },
  { id: 'settings', title: 'Settings', icon: 'settings', route: 'settings' },
];

interface Props {
  closeDrawer: () => void;
}

export default function MenuScreen({ closeDrawer }: Props) {
  const navigation = useNavigation();

  const handleNavigation = (route: ScreenName) => {
    closeDrawer(); // close drawer first
    // Small delay to avoid animation conflict
    setTimeout(() => {
      // @ts-ignore – navigation typings may not include your custom routes
      navigation.navigate(route);
    }, 150);
  };

  const handleSignOut = () => {
    closeDrawer();
    // Add your logout logic (clear tokens, etc.)
    // @ts-ignore
    navigation.replace('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115842" />
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assets/images/UniLogo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.route)}
            activeOpacity={0.7}
          >
            <Feather name={item.icon as any} size={22} color="#374151" style={styles.menuIcon} />
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.signOutContainer}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut} activeOpacity={0.7}>
          <Feather name="log-out" size={22} color="#DC2626" style={styles.signOutIcon} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  imagecontainer: {
    width: 119,
    height: 119,
    borderRadius: 100,
    marginBottom: 30,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: { width: '200%', height: '200%', borderRadius: 100 },
  scrollContent: { paddingVertical: 16 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIcon: { marginRight: 16 },
  menuItemText: { fontSize: 16, fontWeight: '500', color: '#1F2937' },
  signOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  signOutButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  signOutIcon: { marginRight: 16 },
  signOutText: { fontSize: 16, fontWeight: '500', color: '#DC2626' },
});