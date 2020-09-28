import React from 'react'
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    name: {
    	padding: "0 12px 0 0",
    	position: "relative",
	    '&:hover': {
			"& $photo": {
				display: "block"
			}
		}
    },
    photo: {
    	width: 80,
    	height: "auto",
    	position: "absolute",
		left: 4,
	    top: 24,
	    zIndex: 999,
	    boxShadow: "0px 0px 14px -5px rgba(0,0,0,0.75)",
    	display: "none",
    }
}))
export default function ActorPreview(props){
	const classes = useStyles();
	const { id, name, photo } = props
	return (
		<Link to={`/actor/${id}`} style={{textDecoration: 'none', color: '#fff'}}>
			<Typography variant={"span"} className={classes.name}>
				{name}
				<img src={photo} className={classes.photo}/>
			</Typography>
		</Link>
	)
}