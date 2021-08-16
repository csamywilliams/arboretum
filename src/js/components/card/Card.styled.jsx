import styled from 'styled-components';
import { devices } from 'utils/devices';

const CardStyled = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    min-width: 15vw;
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: ${(props) => props.theme.boxShadow} 0px 8px 24px;
    cursor: pointer;

    & > h2 {
        margin: 0;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

const CardImage = styled.img`
    margin: 0;
    padding: 0;
    height: 25vh;

    @media ${devices.mobile} {
        height: 30vh;
    }
`;

export default CardStyled;
export { CardImage };
