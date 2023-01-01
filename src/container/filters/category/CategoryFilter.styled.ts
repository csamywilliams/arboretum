import styled from "styled-components";

const DropdownStyled = styled.select`
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 2.5px;
`;

const ClearButtonStyled = styled.button`
    margin: 1rem;
    padding: 0.5rem;
    background: ${(props) => props.theme.clearButton.bg};
    border: 1px solid ${(props) => props.theme.clearButton.bg};
    border-radius: 2.5px;
    cursor: pointer;
`;

export default DropdownStyled;
export {ClearButtonStyled}