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

// 🔥 CHANGE THIS BASE URL IF NEEDED
// const BASE_URL = "http://10.0.2.2:8000/api"; 
// For real device → use your PC IP like:
const BASE_URL = "http://10.210.223.73:8000/api";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Password validation
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

  // 🔥 REAL LOGIN FUNCTION
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    if (error) {
      Alert.alert('Error', 'Please fix password issues');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        Alert.alert("Success", "Login successful");

        // 🔑 Token handling
        const token = data.token || data.access_token;
        console.log("TOKEN:", token);

        // 👉 TODO (next step): store token using AsyncStorage

        router.push('/edit-profile');

      } else {
        Alert.alert("Error", data.message || "Login failed");
      }

    } catch (error) {
      console.log("Login Error:", error);
      Alert.alert("Error", "Network error");
    }
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleForgotPassword = () => {
    router.push('/forgotPassword');
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
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('../assets/images/UniLogo.png')}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.title}>Alumni Connect</Text>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.subtitle}>Sign In to Alumni Connect</Text>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={validatePassword}
                secureTextEntry
              />

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.signupText}>
              Don't you have an account?
              <Text onPress={handleSignup} style={styles.signupLink}>
                {' '}Request an account
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// 🎨 Styles (same as yours)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  keyboardView: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', paddingBottom: 20 },

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

  content: { flex: 1, paddingHorizontal: 24 },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },

  errorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginBottom: 10,
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#115842',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#115842',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  signupText: {
    marginTop: 20,
    textAlign: 'center',
  },

  signupLink: {
    color: '#115842',
    fontWeight: '600',
  },
  form: {
  width: '100%',
},
});