import styled from 'styled-components';

const ItemStyled = styled.li`
	padding: 1rem 2rem;

	&:hover {
		background: ${(props) => props.theme.listItem.bg};
	}
`;

export default ItemStyled;
