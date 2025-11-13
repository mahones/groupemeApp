import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import BottomTab from './bottomTab';
import SingleGroupements from '../screens/SingleGroupements';

/**
 * RootStackParamList - Type TypeScript pour la navigation globale
 *
 * Ce type définit TOUTES les routes de l'application et leurs paramètres :
 * - 'dashboard': la page d'accueil (pas de paramètres, donc undefined)
 * - 'SingleGroupements': page détail d'un groupement (reçoit un 'id' en paramètre)
 * - 'Profile': page profil (pas de paramètres)
 *
 * Avantage : TypeScript vérifie que les navigations utilisent les bonnes routes
 * avec les bons paramètres. Pas d'erreurs à l'exécution !
 */
export type RootStackParamList = {
  dashboard: undefined;
  SingleGroupements: { id: number };
  Profile: undefined;
};

/**
 * Stack Navigator typé avec RootStackParamList
 * Cela signifie que le navigateur "connaît" toutes les routes possibles
 * et leurs paramètres associés
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="dashboard" component={BottomTab} />
        <Stack.Screen
          name="SingleGroupements"
          component={SingleGroupements}
          options={({ route }) => ({
            headerShown: true,
            title: `Groupement #${route.params.id}`,
          })}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen of routes</Text>
    </View>
  );
}
