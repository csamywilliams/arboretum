import styled from "styled-components";

const CardStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-width: 15vw;
  height: 50vh;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.boxShadow} 0px 8px 24px;
  cursor: pointer;

  & > h3 {
    margin: 1rem 0;
    height: 4.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  margin: 1rem 0;
  padding: 0;
  height: 25vh;
`;

const CardTag = styled.span`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.card.tag.border};
  border-radius: 2px;
  background: ${(props) => props.theme.card.tag.border};
  color: ${(props) => props.theme.card.tag.color};
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: lowercase;
  width: max-content;
`
export default CardStyled;
export { CardImage, CardTag };
