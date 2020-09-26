import { ADD_ERROR, DELETE_ERROR } from '../../types'
import { addError, deleteError } from '../errors'

describe('Test errors actions', ()=> {

	it('Test addError actions', () => {
		const error = 'Network error';
		const result = addError(error)
		const expectedResult = {
			type: ADD_ERROR,
			error: error
		}
		expect(result).toEqual(expectedResult)
	})

	it('Test deleteError actions', () => {
		const id = 12;
		const result = deleteError(id)
		const expectedResult = {
			type: DELETE_ERROR,
			id: id
		}
		expect(result).toEqual(expectedResult)
	})

})

