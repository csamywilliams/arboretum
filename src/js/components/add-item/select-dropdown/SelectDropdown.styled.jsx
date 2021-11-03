import styled from 'styled-components';
import { devices } from 'utils/devices';

const SelectDropdownStyled = styled.select`
    flex: 1;
    height: 3rem;
    padding: 0 0 0 0.5rem;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.input.color};
    font-family: ${(props) => props.theme.bodyFont};
`;

const Label = styled.label`
    font-weight: 600;
    flex: 0.5;
`;

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;

    @media ${devices.laptop} {
        align-items: flex-start;
        flex-direction: column;
    }
`;

const SelectOption = styled.option`
    text-transform: capitalize;
`;

export default SelectDropdownStyled;
export { SelectOption, ContainerStyled, Label };
