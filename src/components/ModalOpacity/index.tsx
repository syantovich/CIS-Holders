import { Modal, TouchableOpacity, Pressable, GestureResponderEvent } from 'react-native';
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
  const handleCancelClose = (e: GestureResponderEvent) => {
    e.stopPropagation();
  };
  return (
    <Modal
      visible={isOpen && !!children}
      animationType="fade"
      transparent={true}
      onRequestClose={handleClose}
    >
      <TouchableOpacity style={styles.container} onPress={handleClose}>
        <Pressable style={styles.wrapper} onPress={handleCancelClose}>
          <IconsAnt name="closecircle" style={styles.closeIcon} size={20} onPress={handleClose} />
          {children}
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};
