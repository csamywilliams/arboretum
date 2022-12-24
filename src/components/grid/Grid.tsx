import { FC, Suspense } from "react";
import trees, { Tree } from "data/trees";
import Card from "components/card/Card";
import GridStyled from "./Grid.styled";

const Grid: FC = () => {
  return (
    <Suspense fallback={<h2>Loading trees...</h2>}>
      <GridStyled>
        {trees.map((tree: Tree) => {
          return <Card key={tree.botanicalName} tree={tree} />;
        })}
      </GridStyled>
    </Suspense>
  );
};

export default Grid;
