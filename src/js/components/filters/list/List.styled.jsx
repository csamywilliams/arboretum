import styled from 'styled-components';
import { devices } from 'utils/devices';

const ListStyled = styled.ul`
	list-style: none;
`;

const ListItemStyled = styled.li`
	* {
		cursor: pointer;
	}
`;

const ItemLabel = styled.label`
	text-transform: capitalize;
`;

export default ListStyled;
export { ListItemStyled, ItemLabel };
