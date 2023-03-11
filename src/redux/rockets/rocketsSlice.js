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
    reserve: (state, action) => {
      const rocketsz = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = rocketsz;
    },
    cancel: (state, action) => {
      const rocketsz = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = rocketsz;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeded';
        if (state.rockets.length === 0) {
          const liveRockets = action.payload;
          const rocketsStore = [];
          liveRockets.map((rocket) => (
            rocketsStore.push(
              {
                id: rocket.id,
                name: rocket.name,
                type: rocket.type,
                description: rocket.description,
                flickr_images: rocket.flickr_images[0],
                reserved: false,
              },
            )));
          state.rockets = rocketsStore;
        }
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserve, cancel } = rocketsSlice.actions;
export default rocketsSlice.reducer;
