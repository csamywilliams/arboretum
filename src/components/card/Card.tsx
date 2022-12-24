import { Tree } from "data/trees";
import { FC } from "react";

interface Props {
  tree: Tree;
}

const Card: FC<Props> = ({ tree }: Props) => {
  return (
    <section>
      <h3>{tree.commonName}</h3>
      <p>{tree.botanicalName}</p>
      <p>{tree.category}</p>
    </section>
  );
};

export default Card;
