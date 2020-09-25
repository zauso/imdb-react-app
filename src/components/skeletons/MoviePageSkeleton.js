import React from "react"
import Grid from "@material-ui/core/Grid"
import Skeleton from "@material-ui/lab/Skeleton"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    skeleton: {
        background: 'rgb(181, 181, 181)',
    },
    icon: {
        color: 'rgb(181, 181, 181)'
    }
}))

export default function MoviePageSkeleton() {
	const classes = useStyles()
    return (
		<Grid container spacing={4}>
			<Grid item md={3} >
				<Skeleton className={classes.skeleton} variant="rect" width={'100%'} height={300}/>
			</Grid>
			<Grid item md={9}>
				<Skeleton className={classes.skeleton}variant="rect" style={{marginTop: 16}} width={'70%'}/>
	            <Skeleton className={classes.skeleton} variant="rect" style={{marginTop: 16}} width={'65%'}/>
	            <Skeleton className={classes.skeleton} variant="rect" style={{marginTop: 16}} width={'40%'}/>
	            <Skeleton className={classes.skeleton} variant="rect" style={{marginTop: 16}} width={'65%'}/>
	            <Skeleton className={classes.skeleton} variant="rect" style={{marginTop: 16}} width={'65%'}/>
	            <Skeleton className={classes.skeleton} variant="rect" style={{marginTop: 16}} width={'50%'}/>
			</Grid>
		</Grid>
    )
}
