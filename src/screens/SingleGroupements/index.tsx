import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
// useRoute pour récupérer les paramètres de la route
// RouteProp pour type-specifier les paramètres
import { useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/routes';
import SingleGroupementsStyle from './SingleGroupementsStyle';
import IconButtonLarge from '../../components/iconButtonLarge';
import { getGroupementById } from '../../utils/groupementsData';
import PopUp from '../../components/popUp';
import InputCustom from '../../components/inputCustom';
// import Icon from 'react-native-vector-icons/EvilIcons';

/**
 * SingleGroupementsRouteProp - Type spécifique pour cette page
 *
 * RouteProp<RootStackParamList, 'SingleGroupements'> signifie :
 * "Je vais utiliser la route 'SingleGroupements' du type RootStackParamList"
 *
 * Cela dit à TypeScript que cette page reçoit un objet 'params'
 * avec une propriété 'id' de type number
 */

type SingleGroupementsRouteProp = RouteProp<
  RootStackParamList,
  'singleGroupements'
>;

export default function SingleGroupements() {

  const route = useRoute<SingleGroupementsRouteProp>();

  const { id } = route.params;

  const groupement = getGroupementById(id);

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
    <View style={SingleGroupementsStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={SingleGroupementsStyle.scrollContainer}
      >
        <View style={SingleGroupementsStyle.imageSlider}>
          {/*
          Utiliser <Image /> plutôt qu'une View pour afficher une image.
          - resizeMode="cover" permet de remplir le conteneur sans déformer.
          - Répéter les borderBottom*Radius dans le style de l'image
            aide Android à afficher les coins arrondis correctement.
          - groupement.image : récupère l'image dynamiquement depuis les données
        */}
          {groupement ? (
            <Image
              source={groupement.image}
              style={SingleGroupementsStyle.image}
              resizeMode="cover"
            />
          ) : (
            <View style={SingleGroupementsStyle.image} />
          )}
        </View>

        <View style={SingleGroupementsStyle.detailsContainer}>
          {/* nb et prix */}
          <View
            style={[
              SingleGroupementsStyle.row,
              SingleGroupementsStyle.etatEtDate,
              SingleGroupementsStyle.priceContainer,
            ]}
          >
            <View style={SingleGroupementsStyle.rowPriceDevise}>
              <Text style={SingleGroupementsStyle.prix}>{groupement?.price} fcfa</Text>
              <Text style={SingleGroupementsStyle.devise}>
                {' '}
                (Prix hors taxes)
              </Text>
            </View>
            <View>
              {/* Affiche une icône différente selon l'ID du groupement */}
              {id === 1 ? (
                <TouchableOpacity>
                  <Image
                    source={require('../../public/assets/png/icons8-heart-65 black.png')}
                    style={SingleGroupementsStyle.imageheart}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Image
                    source={require('../../public/assets/png/icons8-heart-65.png')}
                    style={SingleGroupementsStyle.imageheart}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* fin nb et prix */}
          {/* Affiche l'ID du groupement sélectionné */}
          <View style={SingleGroupementsStyle.titleSubtitleContainer}>
            <View >
              <Text
                style={SingleGroupementsStyle.titleContainer}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {groupement?.title}
              </Text>
              <Text style={SingleGroupementsStyle.autorName}>
                Par: Groupement App
              </Text>
            </View>
            <View style={SingleGroupementsStyle.paticipationborder}>
              <Text
                style={SingleGroupementsStyle.participaiton}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Ma participation : {groupement?.minimum_participant}
              </Text>
              <Text style={SingleGroupementsStyle.participaiton}>
                Prix total: {groupement?.price} fcfa
              </Text>
            </View>
          </View>
          {/* etat et date de clôture */}

          {/* date de clôture */}
          <View style={SingleGroupementsStyle.dateClotureContainer}>
            <View style={SingleGroupementsStyle.rowfeature}>
              <Image
                style={SingleGroupementsStyle.iconSize}
                source={require('../../public/assets/png/icons8-event-accepted-64.png')}
              />
              <Text style={SingleGroupementsStyle.featureTitle}>Clôture:</Text>
              <Text style={SingleGroupementsStyle.featureInfo}>{groupement?.date_cloture}</Text>
            </View>
          </View>
          {/* fin date de clôture */}

          {/* tous les états */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={SingleGroupementsStyle.scrollHorizontal}
          >
            <View
              style={[
                // SingleGroupementsStyle.rowWrap,
                SingleGroupementsStyle.etats,
              ]}
            >
              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-collect-65.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>Etat:</Text>
                <Text style={SingleGroupementsStyle.featureInfo}>{groupement?.etat}</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-country-65 .png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>Pays:</Text>
                <Text style={SingleGroupementsStyle.featureInfo}>{groupement?.pays}</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-truck-65.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Transport:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>
                  {groupement?.transport}
                </Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-bookmark-65.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Catégories:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>{groupement?.categorie}</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-volunteering-65.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Participant:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>{groupement?.participant}</Text>
              </View>
            </View>
          </ScrollView>

          {/* fin de etat et date de clôture */}

          {/* description du groupement */}
          <View style={SingleGroupementsStyle.descriptionContainer}>
            <Text
              style={[
                SingleGroupementsStyle.textMedium,
                SingleGroupementsStyle.textMediumBold,
                SingleGroupementsStyle.bottomBorder,
              ]}
            >
              Description
            </Text>

            <Text
              style={[
                SingleGroupementsStyle.textNormal,
                SingleGroupementsStyle.descriptionTopborder,
              ]}
            >
              {groupement?.description}
            </Text>
          </View>
          {/* fin description du groupement */}
        </View>
      </ScrollView>

      {/* Bouton fixe au bas de l'écran */}
      <IconButtonLarge
        icon="emoji-people"
        iconSize={30}
        iconColor="white"
        text="Participer au groupement"
        onPress={openModal}
        style={SingleGroupementsStyle.fixedButton}
      />
      {groupement ? (
        <PopUp
          visible={isModalVisible}
          title={groupement.title}
          onClose={closeModal}
        >
          <View>
            <View style={SingleGroupementsStyle.popUpImageContainer}>
              <Image
                style={SingleGroupementsStyle.popUpImage}
                source={require('../../public/assets/png/bestfriend solidarity.png')}
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
              style={SingleGroupementsStyle.modalButton}
            />
          </View>
        </PopUp>
      ) : (
        <PopUp
          visible={isModalVisible}
          title="Participer au groupement"
          onClose={closeModal}
        >
          <View>
            <View style={SingleGroupementsStyle.popUpImageContainer}>
              <Image
                style={SingleGroupementsStyle.popUpImage}
                source={require('../../public/assets/png/bestfriend solidarity.png')}
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
              style={SingleGroupementsStyle.modalButton}
            />
          </View>
        </PopUp>
      )}
    </View>
  );
}
