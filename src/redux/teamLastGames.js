import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_TEAM_LAST_GAME = 'react-capstone/GET_TEAM_LAST_GAME';

const initialState = [];

export const getTeamLastGame = createAsyncThunk(
  GET_TEAM_LAST_GAME,
  async () => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=134880');
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
    builder.addCase(getTeamLastGame.fulfilled, (state, action) => action.payload
      .results
      .map((teamLastGames) => ({
        idEvent: teamLastGames.idEvent,
        strEvent: teamLastGames.strEvent,
        strHomeTeam: teamLastGames.strHomeTeam,
        intHomeScore: teamLastGames.intHomeScore,
        strAwayTeam: teamLastGames.strAwayTeam,
        intAwayScore: teamLastGames.intAwayScore,
        strThumb: teamLastGames.strThumb,
      })));
  },
});
