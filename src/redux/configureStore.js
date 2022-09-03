import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { teamsSlice } from './teams';
import { teamLastGamesSlice } from './teamLastGames';

const store = configureStore({
  reducer: {
    teams: teamsSlice.reducer,
    teamLastGames: teamLastGamesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
