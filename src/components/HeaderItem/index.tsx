import { Text, View } from 'react-native';
import { HeaderProps } from 'components/HeaderItem/types';
import styles from 'components/HeaderItem/styles';

const Header = ({ section: { title } }: HeaderProps) => {
  return (
    <View style={styles.wrapperHeader}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
