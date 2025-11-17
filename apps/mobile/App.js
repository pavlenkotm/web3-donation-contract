import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CampaignsScreen from './src/screens/CampaignsScreen';
import DonateScreen from './src/screens/DonateScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NFTScreen from './src/screens/NFTScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ef4444',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Donation App' }}
        />
        <Stack.Screen
          name="Campaigns"
          component={CampaignsScreen}
          options={{ title: 'Campaigns' }}
        />
        <Stack.Screen
          name="Donate"
          component={DonateScreen}
          options={{ title: 'Make Donation' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="NFT"
          component={NFTScreen}
          options={{ title: 'My NFTs' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
