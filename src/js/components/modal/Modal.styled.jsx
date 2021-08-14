import styled from 'styled-components';

const ModalStyled = styled.div``;

const CloseButton = styled.button`
	min-width: 1.5vw;
	margin: 1rem;
	padding: 0.2%;
	background-color: ${(props) => props.theme.button.close.bg};
	color: ${(props) => props.theme.button.close.color};
	border: 1px solid ${(props) => props.theme.button.close.border};
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

export default ModalStyled;
export { CloseButton };
