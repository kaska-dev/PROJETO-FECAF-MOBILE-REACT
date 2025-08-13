import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarLabelStyle:
            { color: '#6b4343ff', },
          tabBarIcon: ({ focused }) => (
            <MaterialIcons size={28} name="house" color={focused ? '#6b4343ff' : '#acacac'} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarLabelStyle:
            { color: '#6b4343ff', },
          tabBarIcon: ({ focused }) => (
            <MaterialIcons size={28} name="settings" color={focused ? '#6b4343ff' : '#acacac'} />
          ),
        }}
      />
    </Tabs>
  );
}
