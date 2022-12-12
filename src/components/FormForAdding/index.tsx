import CustomTextInput from 'components/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import { DropPicker } from 'components/DropDownPicker';
import { useEffect } from 'react';
import { getCategoriesFetch } from 'store/slices/categories';

export const FormForAdding = () => {
  const { categories, isLoading } = useSelector((state: RootStateType) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesFetch());
  }, [dispatch]);
  return (
    <>
      <CustomTextInput placeholder="Name of the place" maxLength={100} />
      <CustomTextInput placeholder="Description" maxLength={500} />
      <CustomTextInput placeholder="Name of the place" />
      <DropPicker items={categories} isLoading={isLoading} />
    </>
  );
};
