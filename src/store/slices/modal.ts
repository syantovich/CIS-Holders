import { ReactNode } from 'react';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  children: ReactNode | null;
  onRequestClose?: (() => void) | null;
  isOpen: boolean;
};
type openModalActionType = {
  payload: { children: ReactNode; onRequestChange?: () => void };
};

const initialState: initialStateType = {
  children: null,
  onRequestClose: null,
  isOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal(state) {
      state.children = null;
      state.isOpen = false;
    },
    openModal(state, action: openModalActionType) {
      state.children = action.payload.children;
      state.onRequestClose = action.payload.onRequestChange;
      state.isOpen = true;
    }
  }
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
