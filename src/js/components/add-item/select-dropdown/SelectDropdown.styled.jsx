import styled from 'styled-components';
import { devices } from 'utils/devices';

const SelectDropdownStyled = styled.select`
    width: 50%;
    height: 3rem;
    padding: 0 0 0 0.5rem;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.input.color};
    font-family: ${(props) => props.theme.bodyFont};

    @media ${devices.laptop} {
        width: 100%;
    }
`;

const Label = styled.label`
    font-weight: 700;
    flex: 0.5;
    margin: 0.5rem 0;
`;

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media ${devices.laptop} {
        align-items: flex-start;
    }
`;

const SelectOption = styled.option`
    text-transform: capitalize;
`;

export default SelectDropdownStyled;
export { SelectOption, ContainerStyled, Label };
