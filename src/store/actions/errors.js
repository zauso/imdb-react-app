import { ADD_ERROR, DELETE_ERROR } from '../types'

export const addError = (error) => {
	console.log("ADD ERROR ACTION")
	console.log(error)
	return {
		type: ADD_ERROR,
		error: error
	}
}

export const deleteError = (id) => {
	console.log("DELETE ERROR ACTION")
	return {
	 	type: DELETE_ERROR,
	 	id: id
	}
}