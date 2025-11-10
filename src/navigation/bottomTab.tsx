import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PALETTE } from '../utils/utilitaires';
import Dashboard from '../screens/Dashboard/index';
import Style from '../global/style';
import Groupements from '../screens/Groupements';
import Participations from '../screens/Participations';
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
          tabBarIcon: tabBarIcon('front-hand'),
        }}
      />
      <Tab.Screen
        name="Propositions"
        component={ProposalsScreen}
        options={{
          tabBarIcon: tabBarIcon('dataset-linked'),
        }}
      />
      <Tab.Screen
        name="verProfile"
        component={ProfileScreen}
        options={{
          tabBarIcon: tabBarIcon('manage-accounts'),
        }}
      />
    </Tab.Navigator>
    
  );
}


function ProposalsScreen() {
  return (
    <View style={Style.container}>
      <Text>Participate Screen of bottomTab</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={Style.container}>
      <Text>Profile Screen of bottomTab</Text>
    </View>
  );
}
