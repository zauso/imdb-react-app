import { ADD_ERROR, DELETE_ERROR } from '../types'

export const addError = (error) => {
	return {
		type: ADD_ERROR,
		error: error
	}
}

export const deleteError = (id) => {
	return {
	 	type: DELETE_ERROR,
	 	id: id
	}
}