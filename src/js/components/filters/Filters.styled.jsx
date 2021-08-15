import styled from 'styled-components';

const Filters = styled.div`
	display: flex;
	flex-direction: column;
`;

const FilterCategory = styled.p`
	font-weight: 600;
	padding: 0 1.5rem;
	margin: 0;
`;

const FilterHeading = styled.h3`
	font-weight: 600;
	padding: 0 1.5rem;
`;

export default Filters;
export { FilterCategory, FilterHeading };
