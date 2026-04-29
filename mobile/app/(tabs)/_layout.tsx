import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window")

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#ffffff',
            position: 'absolute',
            left: 16,
            right: 16,
            height: 60,
            elevation: 1,
            borderRadius:0,
            alignItems: 'center',
            justifyContent:'center',                    
           },
        }}
      >
        <Tabs.Screen
          name="home" // corresponds to app/index.tsx (Home)
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons name={focused? "home": "home-outline"} 
              color={focused? '#000000': 'grey'}
              size={20} />
            </View>
            ),
          }}
        />
        <Tabs.Screen
          name="connections" 
          options={{
            title: 'Message',
            tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons 
                name={focused ? "people" : "people-outline"} 
                color={focused ? '#000000' : 'grey'} 
                size={20} 
              />
            </View>
            ),
          }}
        />
         <Tabs.Screen
          name="search" 
          options={{
            title: 'Search',
            tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons 
               name={focused? "search": "search-outline"} 
                color={focused? '#000000': 'grey'}
                size={20} 
            />
            </View>
            ),
          }}
        />
        <Tabs.Screen
          name="calendar" 
          options={{
            title: 'Calendar',
            tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons 
               name={focused? "calendar": "calendar-outline"} 
                color={focused? '#000000': 'grey'}
                size={20} 
            />
            </View>
            ),
          }}
        />
        
        
         <Tabs.Screen
          name="profile" 
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons 
               name={focused? "person": "person-outline"} 
                color={focused? '#000000': 'grey'}
                size={20} 
            />
            </View>
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}

