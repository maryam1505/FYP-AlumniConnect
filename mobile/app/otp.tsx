import React, { useState, useRef } from 'react';
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
import { useRouter, useLocalSearchParams } from 'expo-router';

const VerifyIdentityScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const email = (params?.email as string) || 'abc122@ue.edu.pk';
  
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [loading, setLoading] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  
  const inputRef0 = useRef<TextInput>(null);
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  
  const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];

  const handleCodeChange = (text: string, index: number) => {
    if (text.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const getFullCode = (): string => code.join('');

  const handleVerify = async () => {
    const fullCode = getFullCode();
    if (fullCode.length !== 4) {
      Alert.alert('Incomplete Code', 'Please enter the 4-digit verification code.');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert(
        'Success',
        'Identity verified successfully!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to changePassword screen using Expo Router
              router.push({
                pathname: '/changePassword',
                params: { email },
              });
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Verification Failed', 'Invalid code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('Code Sent', `A new verification code has been sent to ${email}`);
      setCode(['', '', '', '']);
      inputRefs[0].current?.focus();
    } catch (error) {
      Alert.alert('Error', 'Failed to resend code. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Logo (no back button) */}
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
              <Text style={styles.title}>Verify Your Identity</Text>
              <Text style={styles.description}>
                Enter the 4-digit code we sent to {email}
              </Text>

              <View style={styles.otpContainer}>
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={inputRefs[index]}
                    style={styles.otpInput}
                    value={digit}
                    onChangeText={text => handleCodeChange(text, index)}
                    onKeyPress={e => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    editable={!loading}
                  />
                ))}
              </View>

              <TouchableOpacity
                style={[styles.verifyButton, loading && styles.disabledButton]}
                onPress={handleVerify}
                disabled={loading}
              >
                <Text style={styles.verifyButtonText}>
                  {loading ? 'Verifying...' : 'Verify & Proceed'}
                </Text>
              </TouchableOpacity>

              <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive a code? </Text>
                <TouchableOpacity onPress={handleResendCode} disabled={resendLoading}>
                  <Text style={[styles.resendLink, resendLoading && styles.disabledResend]}>
                    {resendLoading ? 'Sending...' : 'Resend'}
                  </Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#F5F7FA' 
  },
  container: { 
    flex: 1 
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
    marginBottom: 12 
  },
  description: { 
    fontSize: 15, 
    color: '#6B7280', 
    lineHeight: 22, 
    marginBottom: 32 
  },
  otpContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 32 
  },
  otpInput: {
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  verifyButton: {
    backgroundColor: '#115842',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#115842',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  disabledButton: { 
    backgroundColor: '#9CA3AF', 
    shadowOpacity: 0 
  },
  verifyButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  resendContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  resendText: { 
    fontSize: 14, 
    color: '#6B7280' 
  },
  resendLink: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#115842' 
  },
  disabledResend: { 
    color: '#9CA3AF' 
  },
});

export default VerifyIdentityScreen;