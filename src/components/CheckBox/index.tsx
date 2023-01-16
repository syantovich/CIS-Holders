import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { memo, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckBoxProps } from 'components/CheckBox/types';
import { styles } from 'components/CheckBox/styles';

const CheckBox = memo(({ children, action, isChecked, isStrict }: CheckBoxProps) => {
  const [isCheckedState, setIsCheckedState] = useState(!!isChecked);
  const handleCheck = () => {
    if (!isStrict) {
      setIsCheckedState(!isCheckedState);
    }
    action && action();
  };

  useEffect(() => {
    setIsCheckedState(!!isChecked);
  }, [isStrict, isChecked]);

  return (
    <TouchableOpacity onPress={handleCheck} style={styles.wrapperItem}>
      {!isCheckedState ? (
        <FontAwesomeIcon name="circle" />
      ) : (
        <FontAwesomeIcon name="check-circle" color="orange" />
      )}
      {children}
    </TouchableOpacity>
  );
});

CheckBox.displayName = 'CheckBox';
export default CheckBox;
