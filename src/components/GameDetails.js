import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export class GameDetails extends React.Component {
  render() {

    return(
      <div>
          {this.props.gameData.gameData.length > 0 
        ? this.props.gameData.gameData.map((game) => {
          return <Button>{game.teams.away.team.name + " ("+game.teams.away.score+")"} vs {game.teams.home.team.name + " ("+game.teams.home.score+")"}</Button>
        })

        : <div></div>}
      </div>
    ) 
  }
}

function mapStateToProps(state) {
  return {
    gameData: state.gameData,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);