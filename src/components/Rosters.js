import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { obtainOneRosters } from '../actions/rosters';

export class GameDetails extends React.Component {
  render() {

  	console.log("roosty", this.props.rosters.rosters, this.props.rosters.rosters.map(d => d.name))

    return(

      <div>
          {/*<Button onClick={ () => //console.log("GAME DATA", this.props.gameData.gameData, typeof this.props.gameData.gameData)}>
          Show State
          </Button>
        */}
          {this.props.rosters.rosters.length > 0 
        ? this.props.rosters.rosters.map((team) => {
          return <Button onClick={()=> this.props.obtainOneRosters(team.id)}>{team.name}</Button>
        })

        : <div></div>}
        {this.props.rosters.rosters.length > 0
        ? this.props.rosters.rosters[0].roster ?
          this.props.rosters.rosters[0].roster.roster.map((player) => {
            return <div>{player.jerseyNumber + '\t\t'} - {player.person.fullName+ '\t\t'} ({player.position.abbreviation})</div>
          })
          :<div></div>
        :<div></div>}
      </div>
    ) 
  }
}

function mapStateToProps(state) {
  return {
    rosters: state.rosters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    obtainOneRosters: bindActionCreators(obtainOneRosters, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);