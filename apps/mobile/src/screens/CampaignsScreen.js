import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function CampaignsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Campaigns</Text>
      <Text style={styles.emptyText}>No campaigns available yet</Text>
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
});
