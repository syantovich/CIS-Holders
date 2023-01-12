import { NavigationHeaderProps } from 'components/NavigationHeader/types';
import { Text, TouchableOpacity, View } from 'react-native';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import styles from 'components/NavigationHeader/styles';
import FilterForm from 'components/FilterForm';

const NavigationHeader = ({ title, isSort, navigation }: NavigationHeaderProps) => {
  return (
    <View style={styles.wrapperHeader}>
      <View style={[styles.wrapperIcon, styles.center]}>
        <TouchableOpacity onPress={navigation.toggleDrawer}>
          <IconsAnt name="menu-unfold" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.wrapperIcon, styles.center]}>{isSort && <FilterForm />}</View>
    </View>
  );
};

export default NavigationHeader;
