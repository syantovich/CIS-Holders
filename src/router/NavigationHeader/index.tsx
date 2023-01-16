import { NavigationHeaderProps } from 'router/NavigationHeader/types';
import { Text, TouchableOpacity, View } from 'react-native';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import styles from 'router/NavigationHeader/styles';
import FilterForm from 'components/FilterForm';
import { PAGES_NAVIGATOR } from 'router/constants';

const NavigationHeader = ({
  title,
  isSort,
  navigation: { canGoBack, goBack, navigate, toggleDrawer }
}: NavigationHeaderProps) => {
  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigate(PAGES_NAVIGATOR.HOME);
    }
  };

  return (
    <View style={styles.wrapperHeader}>
      <View style={[styles.wrapperIcon, styles.center]}>
        {title !== PAGES_NAVIGATOR.HOME ? (
          <TouchableOpacity onPress={handleGoBack}>
            <IconsAnt name="back" size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleDrawer}>
            <IconsAnt name="menu-unfold" size={20} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.wrapperIcon, styles.center]}>{isSort && <FilterForm />}</View>
    </View>
  );
};

export default NavigationHeader;
