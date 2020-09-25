import React from 'react'
import LazyLoad from 'react-lazyload'
import Grid from "@material-ui/core/Grid"
import MovieCard from '../components/MovieCard'
import MovieCardSkeleton from './skeletons/MovieCardSkeleton'

export default function MoviesList(props){

	const { movies } = props

	return (
	    <Grid container justify="flex-start" wrap={"wrap"} spacing={4}>
	    	{
	    		movies.map((movie, i)=>{
					return(
						<Grid item xs={12} sm={4} md={3}>
							<LazyLoad once key={i} height={300} placeholder={<MovieCardSkeleton/>}>
								<MovieCard
								key={i} 
								title={movie.title} 
								imgUrl={movie.posterImageUrl} 
								id={movie.id}
								info={movie.releaseYear}
								vote={movie.voteAverage}
								/>
							</LazyLoad>
						</Grid>
					)
	    		})
	    	}
	    </Grid>
    )

}
