import styled from 'styled-components';
import { devices } from 'utils/devices';

const Filters = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 1rem 2rem;
`;

const FilterCategory = styled.p`
	font-weight: 400;
`;

export default Filters;
export { FilterCategory };
