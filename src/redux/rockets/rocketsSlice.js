import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rockets: [],
    status: 'idle',
    error: '',
};

// Async thunk to fetch Rockets
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
    const response = await fetch(`https://api.spacexdata.com/v4/rockets`);
    const data = await response.json();
    return data;
  });

  export const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRockets.fulfilled, (state, action) => {
            state.status = 'succeded';
            const liveBooks = action.payload;
            const booksStore = [];
            Object.keys(liveBooks).map((id) => (
              booksStore.push(
                {
                  item_id: id,
                  title: liveBooks[id][0].title[0],
                  author: liveBooks[id][0].author[0],
                  category: liveBooks[id][0].category,
                },
              )
            ));
            state.rockets = booksStore;
            console.log(state.rockets);
          })
    }
  }

  )

  export default rocketsSlice.reducer;
