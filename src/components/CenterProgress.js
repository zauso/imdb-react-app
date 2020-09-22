import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 0'
  }
}));

export default function CenterProgress(){
	const classes = useStyles();
	return (
		<div className={classes.progress}>
			<CircularProgress/>
		</div>
    )
}
