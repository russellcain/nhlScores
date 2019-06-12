import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameDate from './components/GameDate';
import Toolbar from './components/Toolbar';
import GameDetails from './components/GameDetails';
import Rosters from './components/Rosters';

function App() {
  const classes = {
    root: {
    flexGrow: 1,
  },
  }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Toolbar/>
        </Grid>
        <Grid item xs={3}>
          <GameDate/>
        </Grid>
        <Grid item xs={4}>
          <GameDetails/>
        </Grid>
        <Grid item xs={5}>
          <Rosters />
        </Grid>
      </Grid>
  );
}

export default App;
