import styled from 'styled-components';

const AddItemStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Fieldset = styled.fieldset`
    border: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default AddItemStyled;
export { Fieldset, ButtonContainer };
