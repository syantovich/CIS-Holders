import { FormProvider, useForm } from 'react-hook-form';
import ChooseType from 'components/ChooseType';
import { Button, Pressable, TouchableOpacity, View } from 'react-native';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { FilteredFieldsType } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'store/slices/filters';
import CategoryName from 'components/FilterForm/CategoryName';
import TimeCreated from 'components/TimeCreated';
import styles from 'components/FilterForm/styles';
import SortBy from 'components/SortBy';
import { RootStateType } from 'store/index';

const FilterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state: RootStateType) => state.filters);
  const defaultValues: FilteredFieldsType = state;
  const methods = useForm({ defaultValues });
  const dispatch = useDispatch();
  const handleSubmit = (data: FilteredFieldsType) => {
    console.log(data);
    dispatch(setFilters(data));
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOpen}>
          <IconsAnt name="filter" size={20} color={isOpen ? 'orange' : 'black'} />
        </TouchableOpacity>
        {isOpen && (
          <>
            <Pressable onPress={handleOpen}>
              <View style={styles.allScreen} />
            </Pressable>
            <View style={styles.wrapperList}>
              <CategoryName name="Сортировать" />
              <SortBy />
              <CategoryName name="Типы" />
              <ChooseType />
              <CategoryName name="Время создания" />
              <TimeCreated />
              <Button title="Принять" onPress={methods.handleSubmit(handleSubmit)} />
            </View>
          </>
        )}
      </View>
    </FormProvider>
  );
};
export default FilterForm;
