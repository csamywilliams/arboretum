import { Tree } from "data/trees";
import { FC, Suspense } from "react";
import CardStyled, { CardImage, CardTag } from "./Card.styled";

const hyphenateWord = (data) => data.replace(/\s+/g, "-").toLowerCase();

interface Props {
  tree: Tree;
}

const Card: FC<Props> = ({ tree }: Props) => {
  const filename = hyphenateWord(tree.botanicalName);

  return (
    <CardStyled>
      <h3>{tree.commonName}</h3>
      <CardTag>{tree.category}</CardTag>
      <Suspense fallback={<p>Loading image...</p>}>
        <CardImage
          src={`/images/${filename}.png`}
          alt={`Image of ${tree.commonName}`}
          onError={(e: any) => (e.target.src = "/images/placeholder.png")}
        />
      </Suspense>
      <p>{tree.botanicalName}</p>
    </CardStyled>
  );
};

export default Card;
