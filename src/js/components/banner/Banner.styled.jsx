import styled from 'styled-components';

const BannerStyled = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.headerBg};
`;

const Title = styled.h1`
	margin: 0 5rem;
	color: ${(props) => props.theme.title};
	font-family: ${(props) => props.theme.headingFont}, cursive;
	font-size: 2.4rem;
`;

const Actions = styled.div`
	margin: 2rem;
`;

export default BannerStyled;
export { Title, Actions };
