export const groupCategories = (data) => {
    const categories = data.reduce((acc, currentValue) => {
        acc[currentValue.category] = acc[currentValue.category] || [];

        return acc;
    }, {});

    return Object.keys(categories);
};

export const sortItemsAlphabetically = (data) => data.sort((a, b) => a.commonName.localeCompare(b.commonName));

export const hyphenateWord = (data) => data.replace(/\s+/g, '-').toLowerCase();
