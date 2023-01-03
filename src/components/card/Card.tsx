import { Tree } from 'data/trees';
import { FC, Suspense, useState } from 'react';
import truncateWords from 'utils/truncateWords';

import CardStyled, { CardImage, CardTag } from './Card.styled';

const hyphenateWord = (data) => data.replace(/\s+/g, '-').toLowerCase();

interface Props {
  tree: Tree;
}

const Card: FC<Props> = ({ tree }: Props) => {
  const [flip, setFlip] = useState<boolean>(false);
  const filename = hyphenateWord(tree.botanicalName);

  const onClick = () => setFlip(!flip);

  return (
    <CardStyled onClick={onClick}>
      <h3>{tree.commonName}</h3>
      {!flip && (
        <>
          <CardTag>{tree.category}</CardTag>
          <Suspense fallback={<p>Loading image...</p>}>
            <CardImage
              src={`/images/${filename}.png`}
              alt={`Image of ${tree.commonName}`}
              onError={(e: any) => (e.target.src = '/images/placeholder.png')}
            />
          </Suspense>
          <p>{tree.botanicalName}</p>
        </>
      )}
      {flip && (
        <>
          <p>{truncateWords(tree.description, 50)}</p>
        </>
      )}
    </CardStyled>
  );
};

export default Card;
