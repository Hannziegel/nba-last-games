import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_TEAMS = 'react-capstone/GET_TEAMS';

const initialState = [];

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
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => action.payload
      .teams
      .map((teams) => ({
        strTeam: teams.strTeam,
        intFormedYear: teams.intFormedYear,
        strTeamBadge: teams.strTeamBadge,
        strLeague: teams.strLeague,
      })));
  },
});
