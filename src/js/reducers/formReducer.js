const addFormConfig = {
    commonName: {
        isValid: false,
        value: '',
    },
    botanicalName: {
        isValid: false,
        value: '',
    },
    description: {
        isValid: true,
        value: '',
    },
    category: '',
};

const formReducer = (state, action) => {
    const update = () => ({
        ...state,
        [action.name]: {
            isValid: action.isValid,
            value: action.value,
        },
    });

    const updateKeyValue = () => ({
        ...state,
        [action.name]: action.value,
    });

    const actions = {
        update,
        updateKeyValue,
    };

    return actions[action.type]();
};

export default formReducer;
export { addFormConfig };
