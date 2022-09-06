import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_TEAM_LAST_GAME = 'react-capstone/GET_TEAM_LAST_GAME';

const initialState = {
  teamLastGames: [],
  lifecycle: 'initial',
};

export const getTeamLastGame = createAsyncThunk(
  GET_TEAM_LAST_GAME,
  async (idTeam) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=${idTeam}`);
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const teamLastGamesSlice = createSlice({
  name: 'teamLastGames',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeamLastGame.fulfilled, (state, action) => ({
        lifecycle: { loading: 'initial' },
        teamLastGames: action.payload.results,
      }))
      .addCase(getTeamLastGame.pending, (state) => ({
        ...state,
        lifecycle: { loading: 'pending' },
      }))
      .addCase(getTeamLastGame.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});
