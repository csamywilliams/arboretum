import { FC, Suspense } from "react";
import trees, { Tree } from "data/trees";
import Card from "components/card/Card";
import GridStyled from "./Grid.styled";

interface Props {
  data: Array<Tree>;
}

const Grid: FC<Props> = ({ data }: Props) => {
  return (
    <Suspense fallback={<h2>Loading trees...</h2>}>
      <GridStyled>
        {data.map((tree: Tree) => {
          return <Card key={tree.botanicalName} tree={tree} />;
        })}
      </GridStyled>
    </Suspense>
  );
};

export default Grid;
