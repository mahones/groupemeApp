import React from 'react';
import CardStyle from './cardStyle';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType  } from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';
import IconButton from './iconButton';

interface CardProps {
  title: string;
  participant: string;
  flagUrl: string;
  imageSource: ImageSourcePropType;
  price: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  participant,
  flagUrl,
  imageSource,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={CardStyle.itemstyles}>
        <Image style={CardStyle.imagestyle} source={imageSource} />
        {/* description groupement  */}
        <View style={CardStyle.itemscontainer}>
          <Text style={CardStyle.titleitem}>{title}</Text>
          <View style={CardStyle.descriptionitemcontainer}>
            <Image source={{ uri: flagUrl }} style={CardStyle.iconstyle} />
            <Text style={CardStyle.descriptionitem}>
              Mim: {participant} personnes
            </Text>
          </View>
          <View style={CardStyle.priceitemcontainer}>
            <Text style={CardStyle.priceitem}>{price} fcfa</Text>
            <IconButton
              icon="add"
              onPress={() => {}}
              textColor="white"
              backgroundColor={COLOR_PALETTE.secondary}
            />
          </View>
        </View>
        {/* fin description groupement */}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
