import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import HomeScreen from './HomeScreen';
import SavedMatches from './SavedMatches';
import SettingsScreen from './SettingsScreen';
import CompititionScreen from './CompititionScreen';
import { SavedMatchesProvider } from './SavedMatchesContext';
import { FilterProvider } from './FilterContext';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TeamScreen from './TeamScreen';
import LineupScreen from './LineupScreen';
import {
  BannerAdSize,
  BannerAd,
  InterstitialAd,
} from 'react-native-google-mobile-ads';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Logo = require('../../assets/images/Logo.png');
let interstitial; 

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Setting up notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  
    // Setting up interstitial ads
    interstitial = InterstitialAd.createForAdRequest('ca-app-pub-9920313119971157/1613130531', {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
  
    // Function to load and show interstitial ad
    const loadInterstitial = async () => {
      try {
        await interstitial.load(); // Load the ad
      } catch (error) {
        console.error('Error loading interstitial ad:', error);
      }
    };
  
    // Load the interstitial ad
    loadInterstitial();
  
    // Cleanup function to remove listeners and clear resources when component unmounts
    return () => {
      adListener(); // Remove the ad event listener
      interstitial?.destroy(); // Destroy the interstitial ad if it's still active
    };
  }, []);
  
  const handleStartPress = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.background}>
      <Image source={Logo} style={styles.logo} resizeMode='contain' />
      <Text style={styles.description}>Welcome to Football NEWS, your favorite app.</Text>
      <Text style={styles.appTitle}>Football NEWS</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Let's GO</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='HomeScreen'
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'SavedMatches') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Compititions') {
          iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderTopColor: '#dddddd',
        height: 50,
        paddingBottom: 0,
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name='Home' component={HomeStack} />
    <Tab.Screen name='SavedMatches' component={SavedMatches} />
    <Tab.Screen name='Compititions' component={CompititionScreen} />
    <Tab.Screen name='Settings' component={SettingsScreen} />
  </Tab.Navigator>
);

export default function App() {
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  return (
    <FilterProvider>
      <SavedMatchesProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName='WelcomeScreen'>
            <Stack.Screen
              name='WelcomeScreen'
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Main'
              component={MainTabs}
              options={{ headerShown: false }}
            />
        <Stack.Screen name="Leagues" component={CompititionScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Teams" component={TeamScreen}
         options={{ headerShown: false }} />
        <Stack.Screen name="Lineup" component={LineupScreen}
         options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      </SavedMatchesProvider>
    </FilterProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
    textAlign: 'center',
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});