import React from 'react';
import { View , StyleSheet, Animated, Dimensions} from 'react-native';
import { COLOR_PALETTE } from '../../utils/utilitaires';

interface Props {
    data: any
    scrollX: Animated.Value
}
const { width } = Dimensions.get('screen');
export default function Pagination({data, scrollX}: Props) {
  return (
    <View style={styles.container}>
      {data.map((item: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const outputRange = [10, 20, 10];
        
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange,
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View 
            key={item.id} 
            style={[
              styles.dot, 
              { 
                width: dotWidth,
                opacity: opacity 
              }
            ]} 
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    dot:{
        width: 12,
        height: 12,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: COLOR_PALETTE.secondary,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
    }
})