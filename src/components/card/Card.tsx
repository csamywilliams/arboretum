import { Tree } from "data/trees";
import { FC } from "react";
import CardStyled, { CardTag } from "./Card.styled";

interface Props {
  tree: Tree;
}

const Card: FC<Props> = ({ tree }: Props) => {
  return (
    <CardStyled>
      <h3>{tree.commonName}</h3>
      <p>{tree.botanicalName}</p>
      <CardTag>{tree.category}</CardTag>
    </CardStyled>
  );
};

export default Card;
