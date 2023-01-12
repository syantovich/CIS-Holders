import { CategoryNameProps } from 'components/FilterForm/CategoryName/types';
import { Text, View } from 'react-native';
import styles from 'components/FilterForm/CategoryName/styles';

const CategoryName = ({ name }: CategoryNameProps) => {
  return (
    <View style={styles.wrapperText}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default CategoryName;
