import { createSlice } from '@reduxjs/toolkit';
import { FilteredFieldsType, OrderByType } from 'types/types';
import { DIRECTION_SORT, VALUES_ORDER } from 'constants/index';

export type setFiltersActions = {
  payload: FilteredFieldsType;
};

export type FiltersStateType = {
  arrayToFilter: string[];
  orderBy: OrderByType;
  isLoading: boolean;
};
const initialState: FiltersStateType = {
  isLoading: false,
  orderBy: { value: VALUES_ORDER.NAME, direction: DIRECTION_SORT.DESC },
  arrayToFilter: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    checkFilters(state) {
      state.isLoading = true;
    },
    setFilters: (state, actions: setFiltersActions) => {
      state.arrayToFilter = actions.payload.arrayToFilter;
      state.orderBy = actions.payload.orderBy;
      state.isLoading = false;
    }
  }
});
export const { setFilters, checkFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
