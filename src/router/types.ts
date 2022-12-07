import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabsParamsList = {
  Services: undefined;
  Map: undefined;
  Add: undefined;
};
export type RootDrawerStackList = {
  'About us': undefined;
  Home: undefined;
};

export type ServicesPageProps = NativeStackScreenProps<RootTabsParamsList, 'Services'>;
export type MapPageProps = NativeStackScreenProps<RootTabsParamsList, 'Map'>;
export type AddPageProps = NativeStackScreenProps<RootTabsParamsList, 'Add'>;
export type AboutUsProps = NativeStackScreenProps<RootDrawerStackList, 'About us'>;
