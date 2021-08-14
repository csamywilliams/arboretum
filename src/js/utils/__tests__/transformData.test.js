import { groupCategories } from 'utils/transformData';

import { testData } from '__testHelpers__/testData';

describe('groupCategories utils', () => {
	it('should group all the data into categories in the data', () => {
		expect(groupCategories(testData)).toEqual(['acer', 'aspen']);
	});
});
