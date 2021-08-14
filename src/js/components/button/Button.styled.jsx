import styled from 'styled-components';

const ButtonStyled = styled.button`
	width: 6vw;
	margin: 1rem;
	padding: 0.5%;
	background-color: ${(props) =>
		props.primary
			? props.theme.button.primary.bg
			: props.theme.button.secondary.bg};
	color: ${(props) =>
		props.primary
			? props.theme.button.primary.color
			: props.theme.button.secondary.color};
	border: none;
	border-radius: 5px;
	line-height: 2.5rem;
	font-family: ${(props) => props.theme.bodyFont};
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

export default ButtonStyled;
