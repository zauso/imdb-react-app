
const loadData = (state = {}, action) => {
	switch (action.type){
		case 'LOAD_DATA':
			console.log('Get data')
			return {
				...state,
				load: true
			}
		case 'SERHII_JERK' :
			console.log('SERHII_JERK')
			return true
		case 'SAVE_DATA':
			console.log('Save data')
			return {
				...state,
				save: true
			}
	    default:
      		return state
	}
}
export default loadData

