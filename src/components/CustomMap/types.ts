import { CoordinatesType } from 'types/types';

export type CustomMapProps = {
  isChoose?: boolean;
  actionAfterSave?: (coords: CoordinatesType) => void;
};
