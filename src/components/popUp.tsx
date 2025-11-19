import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';

// Props acceptées par le composant BottomPopUp
// - `visible` : indique si la modal doit être affichée
// - `title` : titre optionnel affiché dans l'en-tête
// - `onClose` : callback appelé quand la popup demande à se fermer
// - `children` : contenu rendu à l'intérieur de la popup
type BottomPopUpProps = {
  visible: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const PopUp: React.FC<BottomPopUpProps> = ({
  visible,
  title,
  onClose,
  children,
}) => {
  // L'état local reflète la prop `visible`. Conserver un état local
  // permet au composant d'effectuer des actions locales (par ex.
  // lancer une animation de sortie) avant d'avertir le parent via
  // `onClose` si nécessaire. L'état est synchronisé avec la prop
  // à l'aide de useEffect (voir ci‑dessous).
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(visible);

  // Synchronise l'état local avec la prop externe `visible`.
  // On utilise useEffect pour que la mise à jour d'état se fasse
  // après le rendu — appeler setState pendant le rendu provoquerait
  // un avertissement React et peut créer des boucles de rendu.
  React.useEffect(() => {
    setIsModalVisible(visible);
  }, [visible]);

  // Fonction utilitaire pour fermer la modal localement puis
  // prévenir le parent via `onClose`. On met d'abord à jour l'état
  // local pour fermer la Modal immédiatement, puis on appelle le
  // callback du parent pour qu'il mette à jour son propre état.
  const closeModal = () => {
    setIsModalVisible(false);
    if (onClose) onClose();
  };

  return (
    // Le composant natif Modal affiche son contenu au-dessus de
    // tout le reste. `transparent` permet d'afficher un fond
    // semi-transparent derrière la popup.
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      // `onRequestClose` is required on Android to handle the
      // hardware back button — it should close the modal.
      onRequestClose={closeModal}
    >
      {/*
        Le TouchableWithoutFeedback externe capture les taps sur
        le backdrop (zone sombre). Taper en dehors de la popup
        déclenche la fermeture via closeModal.
      */}
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.container}>
          {/*
            Le TouchableWithoutFeedback interne empêche la propagation
            des taps depuis le contenu de la popup vers le backdrop.
            Sans cela, tout tap à l'intérieur fermerait immédiatement
            la modal.
          */}
          <TouchableWithoutFeedback>
            {/* SafeAreaView évite que le contenu chevauche les zones
              protégées (encoches, barres d'état) sur iOS/Android. */}
            <SafeAreaView style={styles.content}>
              {/* En-tête optionnel : titre + bouton fermer */}
              {title ? (
                <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
                  <TouchableOpacity
                    onPress={closeModal}
                    style={styles.closeBtn}
                  >
                    <Text style={styles.closeText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ) : null}

              {/* Corps : rend le contenu arbitraire passé par l'appelant */}
              <View style={styles.body}>{children}</View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default PopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.62)',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 20,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginHorizontal: 20,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLOR_PALETTE.dark || '#000',
  },
  closeBtn: {
    padding: 6,
  },
  closeText: {
    fontSize: 18,
    color: COLOR_PALETTE.dark || '#000',
  },
  body: {
    // body content styles
    // flex: 1,
    // flexWrap: 'wrap',
    // width: '100%',
  },
});
