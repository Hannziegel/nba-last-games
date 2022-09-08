import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_TEAMS = 'react-capstone/GET_TEAMS';

const initialState = {
  teams: [],
  lifecycle: { loading: 'initial' },
};

export const getTeams = createAsyncThunk(
  GET_TEAMS,
  async () => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=nba');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.fulfilled, (state, action) => ({
        teams: action.payload.teams,
        lifecycle: { loading: 'initial' },
      }))
      .addCase(getTeams.pending, (state) => ({
        ...state,
        lifecycle: { loading: 'pending' },
      }))
      .addCase(getTeams.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});
