import loadData from './load-data.js'

/*
	Testing sum function
*/
function sum(args){
	return Object.values(arguments).reduce((a, b) => (a + b));
};
describe('First test', ()=>{
	it('Test sum 3', ()=>{
		expect(sum(2,1)).toEqual(3)
	})
	it('Test sum 6', ()=>{
		expect(sum(2,2,2)).toEqual(6)
	})
	it('Test sum 18', ()=>{
		expect(sum(3,3,3,3,3,3)).toEqual(18)
	})
})


/*
 	Testing reducer 
*/
describe('Teating load data reducer', ()=>{
	it('Loading is true', ()=>{
		const state = {};
		const action = {
			type: 'LOAD_DATA'
		};
		expect(loadData(state, action)).toEqual({
			...state,
			load: true
		})

	})


	it('Save is true',()=>{
		const state = {};
		const action = {
			type: 'SAVE_DATA'
		}
		expect(loadData(state, action)).toEqual({
			...state,
			save: true
		})
	})

})