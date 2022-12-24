import { Tree } from "data/trees";

interface Props {
  tree: Tree;
}

const Card = ({ tree }: Props) => {
  return (
    <section>
      <h3>{tree.commonName}</h3>
      <p>{tree.botanicalName}</p>
      <p>{tree.category}</p>
    </section>
  );
};

export default Card;
