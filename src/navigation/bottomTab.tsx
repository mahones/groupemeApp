import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PALETTE } from '../utils/utilitaires';
import Dashboard from '../screens/Dashboard/index';
import Groupements from '../screens/Groupements';
import Participations from '../screens/Participations';
import Propositions from '../screens/Propositions';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator();

const tabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <Icon name={name} size={size} color={color} />;

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR_PALETTE.secondary,
        tabBarInactiveTintColor: COLOR_PALETTE.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: tabBarIcon('home'),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Groupements}
        options={{
          tabBarIcon: tabBarIcon('travel-explore'),
        }}
      />
      <Tab.Screen
        name="Participations"
        component={Participations}
        options={{
          tabBarIcon: tabBarIcon('waving-hand'),
        }}
      />
      <Tab.Screen
        name="Propositions"
        component={Propositions}
        options={{
          tabBarIcon: tabBarIcon('dataset-linked'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: tabBarIcon('manage-accounts'),
        }}
      />
    </Tab.Navigator>
  );
}



