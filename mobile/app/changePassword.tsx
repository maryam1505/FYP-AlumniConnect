import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const ChangePasswordScreen: React.FC = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangePassword = async () => {
    if (!newPassword.trim()) {
      Alert.alert('Error', 'Please enter a new password.');
      return;
    }
    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert(
        'Success',
        'Your password has been changed successfully!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to home screen using Expo Router
              router.replace('/home'); // Use replace to prevent going back to change password
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to change password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/UniLogo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.titleHeader}>Alumni Connect</Text>
      </View>
      
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Change Password</Text>
              <Text style={styles.description}>
                Enter your new password and then confirm
              </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Enter new password</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showNewPassword}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    autoCapitalize="none"
                    editable={!loading}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowNewPassword(!showNewPassword)}
                  >
                    <Feather
                      name={showNewPassword ? 'eye-off' : 'eye'}
                      size={22}
                      color="#6B7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm password</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    autoCapitalize="none"
                    editable={!loading}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Feather
                      name={showConfirmPassword ? 'eye-off' : 'eye'}
                      size={22}
                      color="#6B7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.changeButton, loading && styles.disabledButton]}
                onPress={handleChangePassword}
                disabled={loading}
                activeOpacity={0.8}
              >
                <Text style={styles.changeButtonText}>
                  {loading ? 'Updating...' : 'Change Password'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#115842',
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  passwordWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    paddingRight: 50,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 14,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButton: {
    backgroundColor: '#115842',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#115842',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
    shadowOpacity: 0,
  },
  changeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChangePasswordScreen;