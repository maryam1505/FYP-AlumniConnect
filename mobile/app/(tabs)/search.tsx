import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [branch, setBranch] = useState('');
  const [batch, setBatch] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching with:', { firstName, lastName, branch, batch });
    // You can navigate to results or call an API
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* KeyboardAvoidingView handles keyboard pushing content up */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Top status bar */}
          <View style={styles.statusBar}>
            <Text style={styles.title}>Search</Text>
          </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          

          {/* Main heading */}
          
          <Text style={styles.heading}>
            Find your{'\n'}Batchmates / Mentors
          </Text>

          {/* Form inputs */}
          <View style={styles.form}>
            {/* First Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Raman"
                placeholderTextColor="#aaa"
                value={firstName}
                onChangeText={setFirstName}
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>

            {/* Last Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#aaa"
                value={lastName}
                onChangeText={setLastName}
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>

            {/* Branch */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Campus</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#aaa"
                value={branch}
                onChangeText={setBranch}
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>

            {/* Batch (numeric keyboard) */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Batch</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#aaa"
                value={batch}
                onChangeText={setBatch}
                keyboardType="numeric"
                returnKeyType="search"
                onSubmitEditing={handleSearch}  // triggers search when "Go" is pressed
              />
            </View>

            {/* Search button */}
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearch}
              activeOpacity={0.8}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
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
  statusBar: {
    // paddingHorizontal: 0,
    height:85,
    backgroundColor: '#115842', 
    padding: 0,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor:'#115842',
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
    lineHeight: 32,
    textAlign:'center',
    color: '#00022c',

  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#115842', // your primary color
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 