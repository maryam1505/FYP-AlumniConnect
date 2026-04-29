import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NetworkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Network Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2fe', // light blue
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NetworkScreen;