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
};

const formReducer = (state, action) => {
    const update = () => ({
        ...state,
        [action.name]: {
            isValid: action.isValid,
            value: action.value,
        },
    });

    const actions = {
        update,
    };

    return actions[action.type]();
};

export default formReducer;
export { addFormConfig };
