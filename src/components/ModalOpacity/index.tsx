import { Modal, ModalProps, TouchableOpacity, View } from 'react-native';
import styles from 'components/ModalOpacity/styles';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import { ModalOpacityProps } from 'components/ModalOpacity/types';

export const ModalOpacity = (props: ModalOpacityProps) => {
  return (
    <Modal {...props}>
      <View style={styles.container}>
        <IconsAnt
          name="closecircle"
          style={styles.closeIcon}
          size={20}
          onPress={props.onRequestClose}
        />
        <View style={styles.wrapper}>{props.children}</View>
      </View>
    </Modal>
  );
};
