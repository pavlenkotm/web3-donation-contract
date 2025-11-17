import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NFTScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My NFT Collection</Text>
      <Text style={styles.emptyText}>You don't have any NFTs yet</Text>
      <Text style={styles.subtitle}>Make donations to earn NFT rewards!</Text>
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
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 10,
  },
});
