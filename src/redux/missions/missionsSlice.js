/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],

};
// First, create the thunk

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const missionz = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      state.missions = missionz;
    },
    cancel: (state, action) => {
      const missionz = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      state.missions = missionz;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeded';
        const liveMissions = action.payload;
        const missionsStore = [];
        liveMissions.map((mission) => (
          missionsStore.push(
            {
              id: mission.id,
              name: mission.mission_name,
              description: mission.description,
              reserved: false,
            },
          )));

        state.missions = missionsStore;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserve, cancel } = missionsSlice.actions;
export default missionsSlice.reducer;
