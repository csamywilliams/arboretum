import styled from 'styled-components';
import { devices } from 'utils/devices';

const ContentStyled = styled.div`
	display: flex;
	flex-direction: row;
`;

const AsideStyled = styled.aside`
	width: 15vw;
`;

const MainStyled = styled.main`
	flex: 1;
`;

export { ContentStyled, AsideStyled, MainStyled };
