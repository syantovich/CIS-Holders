import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Services: undefined;
  Map: undefined;
  Add: undefined;
};

export type ServicesPageProps = NativeStackScreenProps<RootStackParamList, 'Services'>;
export type MapPageProps = NativeStackScreenProps<RootStackParamList, 'Map'>;
export type AddPageProps = NativeStackScreenProps<RootStackParamList, 'Add'>;
