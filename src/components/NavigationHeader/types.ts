import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

export type NavigationHeaderProps = {
  title: string;
  isSort?: boolean;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};
