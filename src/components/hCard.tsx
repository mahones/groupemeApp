import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import hCardStyle from './hCardStyle';

type CardProps = {
  title: string;
  imageSource: ImageSourcePropType;
};

const HCard: React.FC<CardProps> = ({ title, imageSource }) => {
  return (
    <TouchableOpacity>
      <View style={hCardStyle.horizontalItem}>
        <Image
          style={hCardStyle.categoryImage}
          source={imageSource}
          resizeMode="cover"
        />
        <Text style={hCardStyle.categoryText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default HCard;
