
import { ADD_ERROR, DELETE_ERROR } from '../../types'
import errors from '../errors'

describe('Test errors reducers', () => {
	it('Test addError reducer', () => {
		const error = 'Network error'
		const state = {
			errors: []
		}
		const action = {
			type: ADD_ERROR,
			error: error
		}
		expect(errors(state, action)).toEqual({
			errors: [
				{id: 1, error: 'Network error'}
			]
		})
	})
	it('Test deleteError reducer', () => {
		const id = 2
		const state = {
			errors: [
				{id: 1, error: 'Network error'},
				{id: 2, error: 'Network error'},
				{id: 3, error: 'Network error'}
			]
		}
		const action = {
			type: DELETE_ERROR,
			id: id
		}
		expect(errors(state, action)).toEqual({
			errors: [
				{id: 1, error: 'Network error'},
				{id: 3, error: 'Network error'}
			]
		})
	})
})
