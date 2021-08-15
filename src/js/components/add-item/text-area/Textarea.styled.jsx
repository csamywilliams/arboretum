import styled from 'styled-components';

const TextareaStyled = styled.textarea`
    width: 100%;
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

export default TextareaStyled;
export { ContainerStyled, Label, ErrorText, ValidatedInputStyled };
