import React from 'react';
import { View } from 'react-native';
import Slider from '../../components/slider/slider';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/routes';

export default function Onboarding() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 const onPress = () => navigation.navigate('login');
  return (
    <View>
      <Slider onPress={onPress}/>
    </View>
  );
}
