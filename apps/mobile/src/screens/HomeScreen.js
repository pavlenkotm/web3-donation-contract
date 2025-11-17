import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Donation Ecosystem</Text>
        <Text style={styles.subtitle}>Make a difference with Web3</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>$0</Text>
          <Text style={styles.statLabel}>Total Donated</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Active Campaigns</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="View Campaigns"
          onPress={() => navigation.navigate('Campaigns')}
          color="#ef4444"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="My Profile"
          onPress={() => navigation.navigate('Profile')}
          color="#3b82f6"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="My NFTs"
          onPress={() => navigation.navigate('NFT')}
          color="#8b5cf6"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ef4444',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 5,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
