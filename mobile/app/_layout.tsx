import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { DrawerProvider, useDrawer } from '../app/context/DrawerContext';
import SideDrawer from '../app/Components/SideDrawer';
import { useRouter } from 'expo-router';
import { SettingsProvider } from './settingContext';

// This component will be inside the provider so it can access drawer state
function DrawerWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, closeDrawer } = useDrawer();
  const router = useRouter();

  const handleSignOut = () => {
    closeDrawer();
    router.replace('/login');
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      {/* Render SideDrawer directly – it manages its own overlay & animation */}
      <SideDrawer isOpen={isOpen} onClose={closeDrawer} onSignOut={handleSignOut} />
    </View>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SettingsProvider>
        <DrawerProvider>
          <DrawerWrapper>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="calendar" />
              <Stack.Screen name="signup" />
              <Stack.Screen name="login" />
              <Stack.Screen name="forgetPassword" />
              <Stack.Screen name="otp" />
              <Stack.Screen name="changePassword" />
              <Stack.Screen name="edit-profile" />
              <Stack.Screen name="alumniDirectory" />
              <Stack.Screen name="home" />
              <Stack.Screen name="connections" />
              <Stack.Screen name="eventDetail" />
              <Stack.Screen name="index" />
              <Stack.Screen name="forgotPassword" />
              <Stack.Screen name="notifications" />
              <Stack.Screen name="channels" />
              <Stack.Screen name="mentorChannel" />
              <Stack.Screen name="news" />
              <Stack.Screen name="news(id)" />
              <Stack.Screen name="feed" />
              <Stack.Screen name="jobs" />
              <Stack.Screen name="jobDescription" />
              <Stack.Screen name="alumniConnect" />
              <Stack.Screen name="alumniDirectoryConnect" />
              <Stack.Screen name="mentorship" />
              <Stack.Screen name="message" />
              <Stack.Screen name="chat" />
              <Stack.Screen name="settings" />
            </Stack>
          </DrawerWrapper>
        </DrawerProvider>
      </SettingsProvider>
    </GestureHandlerRootView>
  );
}