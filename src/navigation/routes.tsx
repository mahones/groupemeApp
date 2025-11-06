import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import BottomTab from './bottomTab';

const Stack = createNativeStackNavigator();


export default function Routes() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="dashboard" screenOptions={{headerShown:false}}>
                <Stack.Screen name="dashboard" component={BottomTab} />
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