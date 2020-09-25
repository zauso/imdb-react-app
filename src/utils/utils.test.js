import getScoreColor from './scoreColor'

export const colors = {
    UNKNOWN: '#999',
    BAD: '#d63737',
    OK: '#a7a7a7',
    GOOD: '#5fbb67',
    EXCELLENT: '#3bb33b'
}

describe('Test getScore function', () => {
	it('Expected UNKNOWN colors', () => {
	  const result = getScoreColor(0)
	  expect(result).toEqual(colors.UNKNOWN)
	})
	it('Expected BAD colors', () => {
	  const result = getScoreColor(3)
	  expect(result).toEqual(colors.BAD)
	})
	it('Expected OK colors', () => {
	  const result = getScoreColor(6.3)
	  expect(result).toEqual(colors.OK)
	})
	it('Expected GOOD colors', () => {
	  const result = getScoreColor(7.1)
	  expect(result).toEqual(colors.GOOD)
	})
	it('Expected EXCELLENT colors', () => {
	  const result = getScoreColor(8.5)
	  expect(result).toEqual(colors.EXCELLENT)
	})
})