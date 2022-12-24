import { Tree } from "data/trees";
import { FC } from "react";
import CardStyled from "./Card.styled";

interface Props {
  tree: Tree;
}

const Card: FC<Props> = ({ tree }: Props) => {
  return (
    <CardStyled>
      <h3>{tree.commonName}</h3>
      <p>{tree.botanicalName}</p>
      <p>{tree.category}</p>
    </CardStyled>
  );
};

export default Card;
