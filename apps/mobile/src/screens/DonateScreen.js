import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Donation</Text>
      <Text style={styles.text}>Donation interface coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#6b7280',
  },
});
