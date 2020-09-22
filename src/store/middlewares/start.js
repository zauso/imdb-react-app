/*
export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.log(result)
  return result
}
*/
import { addError } from '../actions/errors'

export const logger = store => next => action => {
	console.log("Error logger")
	const result = next(action);
	console.log(result)
	if(typeof result.error !== "undefined"){
		next(addError(result.error))
	}
	return result;
}

/*
	((result || {}).payload || {}).error
*/