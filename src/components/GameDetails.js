import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

export class GameDetails extends React.Component {
  render() {

    return(

      <div>
          {/*<Button onClick={ () => //console.log("GAME DATA", this.props.gameData.gameData, typeof this.props.gameData.gameData)}>
          Show State
          </Button>
        */}
          {this.props.gameData.gameData.length > 0 
        ? this.props.gameData.gameData.map((game) => {
          return <div>{game.teams.away.team.name} vs {game.teams.home.team.name}</div>
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