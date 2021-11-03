import styled from 'styled-components';
import { devices } from 'utils/devices';

const TextareaStyled = styled.textarea`
    width: 100%;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.input.color};
    font-family: ${(props) => props.theme.bodyFont};
`;

const ContainerStyled = styled.div`
    border: none;
    display: flex;

    & > * {
        flex: 1;
    }

    .textarea {
        &__error {
            border: 1px solid ${(props) => props.theme.error};
        }
    }

    @media ${devices.laptopn} {
        flex-direction: column;
    }
`;

const Label = styled.label`
    font-weight: 700;
    flex: 0.5;
    margin: 0.5rem 0;
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

export default TextareaStyled;
export { ContainerStyled, Label, ErrorText, ValidatedInputStyled };
