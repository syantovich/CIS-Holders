import { createSlice } from '@reduxjs/toolkit';
import { FilteredFieldsType, OrderByType } from 'types/types';
import { DIRECTION_SORT, VALUES_ORDER } from 'constants/index';

export type setFiltersActions = {
  payload: FilteredFieldsType;
};

type initialStateType = {
  arrayToFilter: string[];
  orderBy: OrderByType;
};
const initialState: initialStateType = {
  orderBy: { value: VALUES_ORDER.NAME, direction: DIRECTION_SORT.DESC },
  arrayToFilter: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, actions: setFiltersActions) => {
      state.arrayToFilter = actions.payload.arrayToFilter;
      state.orderBy = actions.payload.orderBy;
    }
  }
});
export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
