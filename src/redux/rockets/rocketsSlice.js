/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: '',
};

// Async thunk to fetch Rockets
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    add: (state, action) => {
      state.rockets.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeded';
        const liveRockets = action.payload;
        const rocketsStore = [];
        liveRockets.map((rocket) => (
          rocketsStore.push(
            {
              id: rocket.id,
              name: rocket.name,
              type: rocket.type,
              flickr_images: rocket.flickr_images[0],
            },
          )));

        state.rockets = rocketsStore;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
