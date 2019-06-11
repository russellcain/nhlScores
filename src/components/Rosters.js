// https://statsapi.web.nhl.com/api/v1/teams

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

  	//console.log("roosty", this.props.rosters.rosters, this.props.rosters.rosters.map(d => d.name))

    return(

      <div>
          {/*<Button onClick={ () => //console.log("GAME DATA", this.props.gameData.gameData, typeof this.props.gameData.gameData)}>
          Show State
          </Button>
        */}
          {this.props.rosters.rosters.length > 0 
        ? this.props.rosters.rosters.map((team) => {
          return <div>{team.name}</div>
        })

        : <div></div>}
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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);