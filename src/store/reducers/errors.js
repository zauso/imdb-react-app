import { ADD_ERROR, DELETE_ERROR } from '../types'

const initialState = {
	errors: [],
}

export default function errors(state = initialState, action){
	switch(action.type){
		case ADD_ERROR:
			return Object.assign({}, state, state.errors.push({id: state.errors.length+1, error: action.error}))
		case DELETE_ERROR:
			return Object.assign({}, state, { 
				errors: state.errors.filter((obj)=>{
					return obj.id != action.id
				})
			})
		default:
			return state

	}
}