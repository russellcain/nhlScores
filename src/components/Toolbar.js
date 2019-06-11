import React from 'react';
import nhlLogo from '../logos/nhlLogo.png';
import gitLogo from '../logos/githubLogo.png';
import Grid from '@material-ui/core/Grid';

export default function TopToolbar() {
  return (
  	<h3 style={{backgroundColor: "#c9ddff"}} >
  	<Grid container spacing={3}>
        <Grid item xs={2}>
 			Welcome to Russell's NHL React Site  
        </Grid>
        <Grid item xs={10} align="right">
        	<div>
	  			<a href="//www.nhl.com/" target="_blank" rel="noopener noreferrer"><img src={nhlLogo} width="3%" height="3%"/></a>
	      		<a href="//github.com/russellcain" target="_blank" rel="noopener noreferrer"><img src={gitLogo} width="3%" height="3%"/></a>
	      	</div>
  		</Grid>
      </Grid>
	
  	</h3>
  );
}