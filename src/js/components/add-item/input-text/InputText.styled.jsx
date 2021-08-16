import styled from 'styled-components';
import { devices } from 'utils/devices';

const InputTextStyled = styled.div`
    border: none;
    display: flex;
    align-items: center;

    & > * {
        flex: 1;
    }

    .input {
        height: 3rem;
        border: none;
        border-radius: 3px;
        background-color: ${(props) => props.theme.input.color};
        font-family: ${(props) => props.theme.bodyFont};

        &__error {
            border: 1px solid ${(props) => props.theme.error};
        }
    }

    @media ${devices.laptopn} {
        align-items: flex-start;
        flex-direction: column;
    }
`;

const Label = styled.label`
    font-weight: 600;
    flex: 0.5;
`;

const ErrorText = styled.span`
    color: ${(props) => props.theme.error};
    font-size: 1.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;

    & > svg {
        margin: 0rem 0.5rem 0 0;
    }
`;

const ValidatedInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2rem 0;
`;

export default InputTextStyled;
export { Label, ErrorText, ValidatedInputStyled };
