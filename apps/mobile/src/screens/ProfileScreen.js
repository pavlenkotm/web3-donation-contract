import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Wallet Address</Text>
        <Text style={styles.value}>Not connected</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Connect Wallet" color="#ef4444" />
      </View>
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
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
