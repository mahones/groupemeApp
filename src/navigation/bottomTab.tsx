import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'
import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createNativeBottomTabNavigator();

// const tabBarIcon =
//   (name: string) =>
//   ({ color, size }: { color: string; size: number }) =>
//     <Icon name={name} size={size} color={color} />;

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        //   tabBarIcon: tabBarIcon('home'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          //tabBarIcon: tabBarIcon('person'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
        //   tabBarIcon: tabBarIcon('settings'),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
        //   tabBarIcon: tabBarIcon('notifications'),
        }}
      /> */}
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen of bottomTab</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen of bottomTab</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen of bottomTab</Text>
    </View>
  );
}

// function NotificationsScreen() {
//   return (
//     <View>
//       <Text>Notifications Screen of bottomTab</Text>
//     </View>
//   );
// }
