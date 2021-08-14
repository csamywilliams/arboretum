import { getCategories } from 'utils/transformData';

import { testData } from '__testHelpers__/testData';

describe('getCategories utils', () => {
	it('should get all the categories in the data', () => {
		expect(getCategories(testData)).toEqual(['acer', 'aspen']);
	});
});
