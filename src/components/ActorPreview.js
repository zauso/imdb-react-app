import React, {useState, useEffect} from 'react'
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom';
import CenterProgress from './CenterProgress'
const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none',
		 color: '#fff'
	},
    name: {
    	padding: "0 12px 0 0",
    	position: "relative",
	    '&:hover': {
			"& $photoBox ": {
				display: "block"
			}
		}
    },
    photoBox: {
    	width: 80,
    	height: "auto",
    	background: "#fff",
    	position: "absolute",
		left: 4,
	    top: 24,
	    zIndex: 999,
	    boxShadow: "0px 0px 14px -5px rgba(0,0,0,0.75)",
    	display: "none"
    },
    photo: {
    	width: "100%",
    	height: "auto"
    }
}))
export default function ActorPreview(props){
	const classes = useStyles();
	const { id, name, photo } = props
	const [hover, setHover] = useState(false)
	const [src, setSrc] = useState(null)

	useEffect(()=>{
		if(hover){
			let img = new Image()
			img.src = photo
			img.onload = () => {
				setSrc(photo)
			}
		} 
	}, [hover])

	return (
		<Link to={`/actor/${id}`} onMouseOver={()=>setHover(true)} className={classes.link}>
			<Typography variant={"span"} className={classes.name}>
				{name}
				<div className={classes.photoBox}>
					{src ? <img src={src} className={classes.photo}/> : <CenterProgress/>}
				</div>
			</Typography>
		</Link>
	)
}