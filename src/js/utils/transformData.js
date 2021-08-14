export const groupCategories = (data) => {
	const categories = data.reduce((acc, currentValue) => {
		acc[currentValue.category] = acc[currentValue.category] || [];
		return acc;
	}, {});

	return Object.keys(categories);
};
