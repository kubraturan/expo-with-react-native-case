import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabName } from '@constants/types';

interface TabsState {
  isActiveTab: TabName;
}

const initialState: TabsState = {
  isActiveTab: 'home',
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabName>) => {
      state.isActiveTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;

export default tabsSlice.reducer;
