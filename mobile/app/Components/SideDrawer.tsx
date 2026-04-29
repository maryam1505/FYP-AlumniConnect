import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  Modal,           // added
} from 'react-native';
import { useRouter, Href } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75; // 75% of screen

type MenuItem = {
  id: string;
  title: string;
  icon: keyof typeof Feather.glyphMap;
  route: Href;
};

const menuItems: MenuItem[] = [
  { id: 'directory', title: 'Alumni Directory', icon: 'users', route: '/alumniDirectory' },
  { id: 'connections', title: 'My Connections', icon: 'user-plus', route: '/connections' },
  { id: 'feed', title: 'Feed', icon: 'rss', route: '/feed' },
  { id: 'jobs', title: 'Jobs and Updates', icon: 'briefcase', route: '/jobs' },
  { id: 'channels', title: 'My Channels', icon: 'cast', route: '/channels' },
  { id: 'mentorship', title: 'Mentorship Programs', icon: 'award', route: '/mentorship' },
  { id: 'messages', title: 'Messages', icon: 'message-circle', route: '/message' },
  { id: 'settings', title: 'Settings', icon: 'settings', route: '/settings' },
];

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}

export default function SideDrawer({ isOpen, onClose, onSignOut }: SideDrawerProps) {
  const router = useRouter();
  const [showSignOutModal, setShowSignOutModal] = React.useState(false);

  // Shared values for animation
  const translateX = useSharedValue(-DRAWER_WIDTH);
  const overlayOpacity = useSharedValue(0);

  useEffect(() => {
    if (isOpen) {
      // Slide in and fade overlay
      translateX.value = withTiming(0, {
        duration: 280,
        easing: Easing.out(Easing.cubic),
      });
      overlayOpacity.value = withTiming(1, { duration: 280 });
    } else {
      // Slide out and hide overlay
      translateX.value = withTiming(-DRAWER_WIDTH, {
        duration: 260,
        easing: Easing.in(Easing.cubic),
      });
      overlayOpacity.value = withTiming(0, { duration: 260 });
    }
  }, [isOpen]);

  const drawerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const overlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
    // When fully hidden, make it non‑interactable
    pointerEvents: overlayOpacity.value === 0 ? 'none' : 'auto',
  }));

  const handleNavigation = (route: Href) => {
    onClose();
    // Small delay to let drawer close animation finish
    setTimeout(() => router.push(route), 150);
  };

  const handleSignOutPress = () => setShowSignOutModal(true);
  const confirmSignOut = () => {
    setShowSignOutModal(false);
    onSignOut();
  };

  return (
    <>
      {/* Overlay – animated opacity, covers whole screen */}
      <Animated.View style={[styles.overlay, overlayAnimatedStyle]}>
        <TouchableOpacity style={styles.overlayTouch} onPress={onClose} activeOpacity={1} />
      </Animated.View>

      {/* Drawer Container – animated translation */}
      <Animated.View style={[styles.drawerContainer, drawerAnimatedStyle]}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />

          {/* Logo / Header Section */}
          <View style={styles.headerSection}>
            <Image
              source={require('../../assets/images/UniLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <ScrollView
            contentContainerStyle={styles.menuContainer}
            showsVerticalScrollIndicator={false}
          >
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => handleNavigation(item.route)}
                activeOpacity={0.7}
              >
                <Feather name={item.icon} size={22} color="#2c3e50" style={styles.menuIcon} />
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}

            {/* Sign Out Button */}
            <TouchableOpacity
              style={[styles.menuItem, styles.signOutItem]}
              onPress={handleSignOutPress}
              activeOpacity={0.7}
            >
              <Feather name="log-out" size={22} color="#fff" style={styles.menuIcon} />
              <Text style={[styles.menuText, styles.signOutText]}>Sign Out</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>

      {/* Sign Out Modal (unchanged) */}
      <Modal
        transparent
        visible={showSignOutModal}
        animationType="fade"
        onRequestClose={() => setShowSignOutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowSignOutModal(false)}>
              <Feather name="x" size={20} color="#115848" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Sign out ?</Text>
            <Text style={styles.modalMessage}>
              If you answer yes, you will be signed out from the app.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, styles.modalYesButton]} onPress={confirmSignOut}>
                <Text style={[styles.modalButtonText, styles.modalYesText]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.modalNoButton]} onPress={() => setShowSignOutModal(false)}>
                <Text style={[styles.modalButtonText, styles.modalNoText]}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 5,
  },
  overlayTouch: {
    flex: 1,
  },
  drawerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#fff',
    zIndex: 10,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  menuContainer: {
    paddingVertical: 10,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    marginRight: 18,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  signOutItem: {
    marginTop: 40,
    backgroundColor: '#115848',
    marginHorizontal: 24,
    borderRadius: 30,
    borderBottomWidth: 0,
    justifyContent: 'center',
  },
  signOutText: {
    color: '#fff',
    marginLeft: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#4b5563',
  },
  modalButtons: {
    width: '100%',
    gap: 12,
  },
  modalButton: {
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  modalYesButton: {
    backgroundColor: '#115848',
  },
  modalNoButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#115848',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalYesText: {
    color: '#fff',
  },
  modalNoText: {
    color: '#115848',
  },
});