import React, {useState, useCallback, useEffect} from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router"
import Container from "@material-ui/core/Container"

function LoadImg(props){
	const { src } = props;
	return <img src={src}/>
}

function Actor(props){
	const {id: actorId} = useParams()
	return (
		<Container>
			<h2>Actor page</h2>
			<LoadImg src="https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg"/>
		</Container>
	)
}

const mapStateToProps = (state) => {
}
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
