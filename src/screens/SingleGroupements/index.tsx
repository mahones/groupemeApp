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
  'SingleGroupements'
>;

export default function SingleGroupements() {
  /**
   * useRoute() - Hook React Navigation pour accéder aux paramètres de la route
   *
   * C'est comme la "props" de la page, mais spécifique à la navigation.
   * On le type avec SingleGroupementsRouteProp pour que TypeScript
   * sache quels paramètres sont disponibles
   */
  const route = useRoute<SingleGroupementsRouteProp>();

  /**
   * Déstructuration des paramètres
   * route.params contient : { id: number }
   * Donc on récupère juste l'id que Dashboard a envoyé
   */
  const { id } = route.params;

  /**
   * Récupère le groupement complet (id + image) depuis les données centralisées
   */
  const groupement = getGroupementById(id);

  // const [ isModalVisible, setIsModalVisible ] = React.useState(false);
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
              <Text style={SingleGroupementsStyle.prix}>1000 fcfa</Text>
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
            <View style={{ flex: 1 }}>
              <Text
                style={SingleGroupementsStyle.titleContainer}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Groupement ID: kjkfejs kejsfeoi kljdfio ksljf lkj ko oi joifes
                kdfe dd {id}
              </Text>
              <Text style={SingleGroupementsStyle.autorName}>
                Par: Groupement App
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
              <Text style={SingleGroupementsStyle.featureInfo}>10/10/2022</Text>
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
                  source={require('../../public/assets/png/icons8-footprint-64.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>Etat:</Text>
                <Text style={SingleGroupementsStyle.featureInfo}>Collecte</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-country-65 (1).png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>Pays:</Text>
                <Text style={SingleGroupementsStyle.featureInfo}>Togo</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-illumination-brightness-64.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Transport:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>
                  Par bateaux
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
                  source={require('../../public/assets/png/icons8-category-64.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Catégories:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>Livres</Text>
              </View>

              <View
                style={[
                  SingleGroupementsStyle.rowfeature,
                  SingleGroupementsStyle.etatBordure,
                ]}
              >
                <Image
                  style={SingleGroupementsStyle.iconSize}
                  source={require('../../public/assets/png/icons8-trophy-cup-64.png')}
                />
                <Text style={SingleGroupementsStyle.featureTitle}>
                  Participant:
                </Text>
                <Text style={SingleGroupementsStyle.featureInfo}>12</Text>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
