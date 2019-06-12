import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { obtainOneRosters } from '../actions/rosters';

export class GameDetails extends React.Component {
  render() {

    return(

      <Grid container spacing={3}>
        <Grid item xs={6}>
          {this.props.teams.length > 0 
        ? this.props.teams.map((team) => {
          return <Button onClick={()=> this.props.obtainOneRosters(team.id)}>{team.name}</Button>
        })

        : <div></div>}
        </Grid>
        <Grid item xs={6}>
        {this.props.chosenRoster.length > 0
        ? this.props.chosenRoster[0].roster ?
          this.props.chosenRoster[0].roster.roster.map((player) => {
            return <div>{player.jerseyNumber + '\t\t'} - {player.person.fullName+ '\t\t'} ({player.position.abbreviation})</div>
          })
          :<div></div>
        :<div></div>}
        </Grid>
      </Grid>

    ) 
  }
}

function mapStateToProps(state) {
  return {
    chosenRoster: state.rosters.chosenRoster,
    teams: state.rosters.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    obtainOneRosters: bindActionCreators(obtainOneRosters, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);