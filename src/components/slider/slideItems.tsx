import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

type Props = {
  title: string;
  img: ImageSourcePropType;
  description: string;
};

const SlideItems = ({ title, img, description }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image resizeMode="contain" source={img} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default SlideItems;

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    width: '85%',
    textAlign: 'center',
    fontWeight: '700',
    alignContent: 'center',
  },
  description: {
    width: '85%',
    fontSize: 16,
    alignContent: 'center',
    textAlign: 'center',
    lineHeight: 20
  },
  imagecontainer: {
    paddingBottom: 20,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 200,
    width: 300
  }
});
