import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	container: {
		minHeight: "80vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    },
    title: {
    	fontSize: "140px",
	    fontFamily: "Roboto",
	   	color: "#d6d6d6",
	   	fontWeight: "bold"
    }
	
}));

export default function NotFound(){
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.title}>404 page</div>
		</div>
	)
}