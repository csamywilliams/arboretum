import styled from 'styled-components';
import { devices } from 'utils/devices';

const Filters = styled.div`
	display: flex;
	flex-direction: column;
`;

const FilterCategory = styled.p`
	font-weight: 600;
	padding: 0 1.5rem;
`;

export default Filters;
export { FilterCategory };
