import { FormProvider, useForm } from 'react-hook-form';
import ChooseType from 'components/ChooseType';
import { Button, Pressable, TouchableOpacity, View } from 'react-native';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { FilteredFieldsType } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'store/slices/filters';
import CategoryName from 'components/FilterForm/CategoryName';
import styles from 'components/FilterForm/styles';
import SortBy from 'components/SortBy';
import { RootStateType } from 'store/index';
import { CATEGORIES_NAME, FILTER_COLORS } from 'components/FilterForm/constants';

const FilterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state: RootStateType) => state.filters);
  const defaultValues: FilteredFieldsType = state;
  const methods = useForm({ defaultValues });
  const dispatch = useDispatch();
  const handleSubmit = (data: FilteredFieldsType) => {
    dispatch(setFilters(data));
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
    methods.reset(state);
  };

  useEffect(() => {
    methods.reset(state);
  }, [state]);
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOpen}>
          <IconsAnt
            name="filter"
            size={20}
            color={isOpen ? FILTER_COLORS.OPEN : FILTER_COLORS.CLOSE}
          />
        </TouchableOpacity>
        {isOpen && (
          <>
            <Pressable onPress={handleClose}>
              <View style={styles.allScreen} />
            </Pressable>
            <View style={styles.wrapperList}>
              <CategoryName name={CATEGORIES_NAME.SORT} />
              <SortBy />
              <CategoryName name={CATEGORIES_NAME.TYPE} />
              <ChooseType />
              <Button
                title={CATEGORIES_NAME.CONFIRM}
                onPress={methods.handleSubmit(handleSubmit)}
              />
            </View>
          </>
        )}
      </View>
    </FormProvider>
  );
};
export default FilterForm;
