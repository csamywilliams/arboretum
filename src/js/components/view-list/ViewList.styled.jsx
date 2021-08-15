import styled from 'styled-components';
import { devices } from 'utils/devices';

const ViewListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 20vw);

	@media ${devices.laptop} {
		flex-direction: column;
		grid-template-columns: repeat(2, 50vw);
	}
`;

export default ViewListStyled;
