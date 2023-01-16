import { Modal, View } from 'react-native';
import styles from 'components/ModalOpacity/styles';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'store/index';
import { closeModal } from 'store/slices/modal';

export const ModalOpacity = () => {
  const { isOpen, onRequestClose, children } = useSelector((state: RootStateType) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    onRequestClose && onRequestClose();
    dispatch(closeModal());
  };
  return (
    <Modal
      visible={isOpen && !!children}
      animationType="fade"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <IconsAnt name="closecircle" style={styles.closeIcon} size={20} onPress={handleClose} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
