import { useReducer, useState, useEffect } from 'react';
import formReducer, { addFormConfig } from 'reducers/formReducer';

const useForm = () => {
    const [state, dispatch] = useReducer(formReducer, addFormConfig);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isFormValid = Object.values(state).every((item) => item.isValid);

        setIsFormValid(isFormValid);
    }, [state]);

    return {
        state,
        dispatch,
        isFormValid,
    };
};

export default useForm;
