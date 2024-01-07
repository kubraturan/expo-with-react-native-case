import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeenGuiding {
  isSeenGuiding: boolean;
}

const initialState: SeenGuiding = {
  isSeenGuiding: false,
};

export const guidingSlice = createSlice({
  name: 'guiding',
  initialState,
  reducers: {
    setIsSeenGuiding: (state, action: PayloadAction<boolean>) => {
      state.isSeenGuiding = action.payload;
    },
  },
});

export const { setIsSeenGuiding } = guidingSlice.actions;

export default guidingSlice.reducer;
