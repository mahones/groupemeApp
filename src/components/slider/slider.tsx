import React from 'react';
import { StyleSheet, View, FlatList, Animated } from 'react-native';
import ONBOARDIN_DATA from '../../screens/Auth/onboardingData';
import SlideItems from './slideItems';
import IconButtonLarge from '../iconButtonLarge';
import Pagination from './pagination';

const Slider = () => {
/**
 * Handle when the user scrolls the FlatList.
 * This function is called when the user scrolls the FlatList.
 * It is used to detect when the user has scrolled to the end of the list.
 */
const scrollX = React.useRef(new Animated.Value(0)).current;
const handleOnScroll =  Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX
            },
          },
        },
      ],
      { useNativeDriver: false },
    )
  return (
    <View style={styles.container}>
      <View style={styles.slidecontainer}>
        <FlatList
          data={ONBOARDIN_DATA}
          keyExtractor={item => item.id.toString()}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <SlideItems
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          )}
        />
        <Pagination data={ONBOARDIN_DATA} scrollX={scrollX}/>
      </View>
      <View style={styles.centerbutton}>
        <View style={styles.buttoncontainer}>
          <IconButtonLarge text="Skip" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  slidecontainer: {
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttoncontainer: {
    width: '90%',
    alignContent: 'center',
  },
  centerbutton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
