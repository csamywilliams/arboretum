import styled from 'styled-components';
import { devices } from 'utils/devices';

const ListStyled = styled.ul`
	list-style: none;
	padding: 0;
`;

const ListItemStyled = styled.li`
	padding: 1rem;
	box-shadow: 0px 1px 0 ${(props) => props.theme.boxShadow};
	cursor: pointer;

	* {
		cursor: pointer;
	}
`;

const ItemLabel = styled.label`
	text-transform: capitalize;
`;

export default ListStyled;
export { ListItemStyled, ItemLabel };
