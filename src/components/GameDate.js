import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { obtainGamesForDate } from "../actions/selectDate";
import { obtainAllRosters } from "../actions/rosters";


const classes = theme => ({
	grid: {
		width: '40%',
	},
});



export class GameDate extends React.Component {
	state = {
		currentDate: new Date("2018-11-11"),
	}

	handleDate = (selectedDate) => {
		// //console.log(selectedDate)
		var newDate = new Date(selectedDate)
		this.setState({currentDate: newDate})
		if(newDate !== this.state.currentDate){
			var apiDate = newDate.getFullYear().toString().concat("-").concat(newDate.getMonth()+1).toString().concat("-").concat(newDate.getDate().toString())
			this.props.obtainGamesForDate(apiDate)
		}
	}

	render() {
		return (
			<Grid container className={classes.grid} justify="space-around">
				<Button onClick={() => this.props.obtainAllRosters()}> Load Rosters </Button>
    			<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						margin="normal"
						id="mui-pickers-date"
						label="Pick Game Day"
						value={this.state.currentDate}
						onChange={this.handleDate}
						KeyboardButtonProps={{
						'aria-label': 'change date',
						}}
					/>
    			</MuiPickersUtilsProvider>
			</Grid>
		);

	}
  
}

function mapStateToProps(state) {
  return {
    gameData: state.gameData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	obtainGamesForDate: bindActionCreators(obtainGamesForDate, dispatch),
  	obtainAllRosters: bindActionCreators(obtainAllRosters, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDate);