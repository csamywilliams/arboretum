import styled from 'styled-components';
import { devices } from 'utils/devices';

const ViewListStyled = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	@media ${devices.laptop} {
		flex-direction: column;
	}
`;

export default ViewListStyled;
