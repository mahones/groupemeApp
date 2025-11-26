import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

// Types pour les images sélectionnées
interface SelectedImage {
  id: string;
  uri: string;
}

const ImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);

  // Fonction pour sélectionner les images
  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 0, // 0 = illimité
        quality: 1,
      },
      response => {
        if (response.assets) {
          const newImages = response.assets.map((asset, index) => ({
            id: `${Date.now()}-${index}`,
            uri: asset.uri || '',
          }));
          setSelectedImages([...selectedImages, ...newImages]);
        }
      },
    );
  };

  // Fonction pour retirer une image
  const removeImage = (id: string) => {
    setSelectedImages(selectedImages.filter(img => img.id !== id));
  };

  // Rendu d'une image dans la galerie
  const renderImageItem = ({ item }: { item: SelectedImage }) => (
    <View>
      <Image source={{ uri: item.uri }} />
      <TouchableOpacity onPress={() => removeImage(item.id)}>
        <Icon name="close" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View>
        {/* Bouton de sélection */}
        <TouchableOpacity
          onPress={pickImages}
          style={styles.imageSelectionContainer}
        >
          <View style={styles.imageSecondBorder}>
            <Icon name="add-photo-alternate" size={70} color="#ccc" />
            <Text>Choisir des images</Text>
          </View>
        </TouchableOpacity>

        {/* Compteur d'images */}
        {selectedImages.length > 0 && (
          <Text>
            {selectedImages.length} image{selectedImages.length > 1 ? 's' : ''}{' '}
            sélectionnée{selectedImages.length > 1 ? 's' : ''}
          </Text>
        )}

        {/* Galerie des images sélectionnées */}
        {selectedImages.length > 0 ? (
          <FlatList
            data={selectedImages}
            renderItem={renderImageItem}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={{}}
            scrollEnabled={false}
          />
        ) : (
          <View style= {styles.noneImageContainer}>
            <Icon name="photo-library" size={40} color="#ccc" style={{paddingRight: 10}} />
            <Text>Aucune image sélectionnée</Text>
          </View>
        )}

        {/* Bouton pour tout effacer */}
        {selectedImages.length > 0 && (
          <TouchableOpacity onPress={() => setSelectedImages([])}>
            <Text>Tout effacer</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageSelectionContainer: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 5,
    marginBottom: 30,
  },
  imageSecondBorder: {
    borderWidth: 1,
    borderStyle: 'dotted',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    borderRadius: 5,
  },
  noneImageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
