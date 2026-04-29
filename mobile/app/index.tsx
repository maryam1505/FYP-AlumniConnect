import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
// import { Href } from 'expo-router'; // Import Href type

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to Login screen after 3 seconds
    const timer = setTimeout(() => {
      router.push('/login'); // ✅ Type-safe navigation
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.content}>
        {/* University Logo */}
       <View style={styles.imagecontainer}>
          <Image
            source={require('../assets/images/UniLogo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        {/* App Title */}
        <Text style={styles.title}>Alumni Connect</Text>
        
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>University of Education Lahore, Multan Campus</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#115842',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imagecontainer:{
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 30,
    backgroundColor:'#FFFFFF',
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
});