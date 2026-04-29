import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const router = useRouter();
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState('');
  const [batch, setBatch] = useState('');
  const [error, setError] = useState('');

  // Password validation (same as login screen)
  const validatePassword = (text: string) => {
    setPassword(text);
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPassword.test(text)) {
      setError(
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.'
      );
    } else {
      setError('');
    }
  };

  const handleSignUp = () => {
    if (!emailPhone || !password || !branch || !batch) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (error) {
      Alert.alert('Error', 'Please fix password issues');
      return;
    }
    // Simulate successful sign-up
    Alert.alert('Success', 'Account created!', [
      { text: 'OK', onPress: () => router.replace('/home') },
    ]);
  };

  const handleGoogleSignUp = () => {
    Alert.alert('Google Sign Up', 'Integrate Google OAuth here');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header with Logo */}
          <View style={styles.header}>
            <Image
              source={require('../assets/images/UniLogo.png')}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.title}>Alumni Connect</Text>
          </View>

          {/* Form Content */}
          <View style={styles.content}>
            <Text style={styles.subtitle}>Create an Account</Text>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email or phone number"
                placeholderTextColor="#999"
                value={emailPhone}
                onChangeText={setEmailPhone}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={validatePassword}
                secureTextEntry
              />

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <TextInput
                style={styles.input}
                placeholder="Enter Branch"
                placeholderTextColor="#999"
                value={branch}
                onChangeText={setBranch}
              />

              <TextInput
                style={styles.input}
                placeholder="Enter Batch"
                placeholderTextColor="#999"
                value={batch}
                onChangeText={setBatch}
                keyboardType="numeric"
              />

              {/* Sign Up Button */}
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Or sign up with Google */}
            <View style={styles.orContainer}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>Or sign up with Google</Text>
              <View style={styles.orLine} />
            </View>

            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
              <Ionicons name="logo-google" size={20} color="#DB4437" />
              <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </TouchableOpacity>

            {/* Link to Sign In */}
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>Sign in now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'left',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginBottom: 10,
    marginTop: -5,
  },
  button: {
    backgroundColor: '#115842',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#666',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#115842',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#115842',
    marginLeft: 10,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  signInText: {
    color: '#666',
    fontSize: 16,
  },
  signInLink: {
    color: '#115842',
    fontSize: 16,
    fontWeight: '600',
  },
});