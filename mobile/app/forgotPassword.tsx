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

const ResetPasswordScreen: React.FC = () => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle back button press - uses Expo Router back navigation
  const handleBack = () => {
    router.back(); // Goes back to previous screen
  };

  // Handle send code action
  const handleSendCode = async () => {
    if (!identifier.trim()) {
      Alert.alert('Error', 'Please enter your email or phone number.');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert(
        'Code Sent',
        `A 6-digit recovery code has been sent to ${identifier}.`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to OTP verification screen using Expo Router
              router.push({
                pathname: '/otp',
                params: { identifier },
              });
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send recovery code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle back to login screen
  const handleBackToLogin = () => {
    router.push('/login'); // Navigate to login screen
  };

  return (
    
    <SafeAreaView style={styles.safeArea}>
         {/* Header with Logo */}
                  <View style={styles.header}>
                    <Image
                      source={require('../assets/images/UniLogo.png')}
                      style={styles.logo}
                      resizeMode="cover"
                    />
                    <Text style={styles.title}>Alumni Connect</Text>
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
           
            <Text style={styles.resetTitle}>Reset Password</Text>
            <Text style={styles.description}>
              Enter your registered email below.{'\n'}
              We'll send a 6-digit recovery code to verify your identity.
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email or phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email or phone number"
                placeholderTextColor="#9CA3AF"
                value={identifier}
                onChangeText={setIdentifier}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="done"
                editable={!loading}
              />
            </View>

            <TouchableOpacity
              style={[styles.sendButton, loading && styles.disabledButton]}
              onPress={handleSendCode}
              disabled={loading}
              activeOpacity={0.8}
            >
              <Text style={styles.sendButtonText}>
                {loading ? 'Sending...' : 'Send Code'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBackToLogin} style={styles.backToLogin}>
              <Text style={styles.backToLoginText}>Back to Sign In</Text>
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
    flexGrow: 1, // Ensures ScrollView takes full height
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  header: {
    backgroundColor: '#115842', // University green
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
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
//   backButton: {
//     padding: 8,
//     marginLeft: -8,
//   },
//   backText: {
//     fontSize: 28,
//     color: '#FFFFFF',
//     fontWeight: '500',
//   },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  alumniText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF', // Match university green
    letterSpacing: 1,
  },
  alumniConnectText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 2,
    fontWeight: '500',
  },
  resetTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#616F89',
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
  },
  sendButton: {
    backgroundColor: '#115842', // University green
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
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
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  backToLogin: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  backToLoginText: {
    color: '#115842',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ResetPasswordScreen;