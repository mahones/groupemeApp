import React from 'react';
import CardStyle from './cardStyle';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';
import IconButton from './iconButton';
import PopUp from './popUp';
import IconButtonLarge from './iconButtonLarge';
import InputCustom from './inputCustom';


interface CardProps {
  title: string;
  participant: string;
  flagUrl: string;
  imageSource: ImageSourcePropType;
  price: string;
  onPress: () => void;
  iconBgColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  participant,
  flagUrl,
  imageSource,
  price,
  onPress,
  iconBgColor,
}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [count, setCount] = React.useState('');
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const countToZero = () => {
    setCount('0');
  };
  return (
    <TouchableOpacity onPress={onPress} style={CardStyle.touchableOpacity}>
      <View style={CardStyle.itemstyles}>
        <Image style={CardStyle.imagestyle} source={imageSource} />
        {/* description groupement  */}
        <View style={CardStyle.itemscontainer}>
          <Text
            style={CardStyle.titleitem}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <View style={CardStyle.descriptionitemcontainer}>
            <Image source={{ uri: flagUrl }} style={CardStyle.iconstyle} />
            <Text style={CardStyle.descriptionitem}>
              Mim: {participant} personnes
            </Text>
          </View>
          <View style={CardStyle.priceitemcontainer}>
            <Text style={CardStyle.priceitem}>{price} fcfa</Text>
            {iconBgColor ? (
              <IconButton
                icon="emoji-people"
                onPress={openModal}
                textColor="white"
                backgroundColor={iconBgColor}
              />
            ) : (
              <IconButton
                icon="emoji-people"
                onPress={openModal}
                textColor="white"
                backgroundColor={COLOR_PALETTE.secondary}
              />
            )}
          </View>
        </View>
        {/* fin description groupement */}

        {/* afficher le popUp */}
        <PopUp
          visible={isModalVisible}
          title={title}
          onClose={closeModal}
        >
          <View>
            <View style={CardStyle.popUpImageContainer}>
              <Image
                style={CardStyle.popUpImage}
                source={require('../public/assets/png/bestfriend solidarity.png')}
              />
            </View>
            <View>
              <InputCustom
                label="Nombre de participants"
                iconName="people"
                keyboardType="numeric"
                placeholder="Entrez le nombre de participants"
                value={count}
                // Met à jour `count` avec la valeur saisie.
                // onChangeText reçoit le texte saisi (string) — on le convertit
                // en number pour stocker dans `count`.
                onChangeText={(text: string) => {
                  if (text === '' || /^\d+$/.test(text)) {
                    setCount(text);
                  }
                }}
              />
            </View>
            <View
            // style={SingleGroupementsStyle.popUpTextContainer}
            >
              <Text>
                Nb: Après validation, vous ne pouvez plus annuler votre
                participation.
              </Text>
            </View>

            <IconButtonLarge
              text="Valider ma participation"
              onPress={countToZero}
              style={CardStyle.modalButton}
            />
          </View>
        </PopUp>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
