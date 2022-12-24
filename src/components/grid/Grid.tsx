import { Suspense } from "react";
import trees, { Tree } from "data/trees";
import Card from "components/card/Card";

const Grid = () => {
  return (
    <Suspense fallback={<h2>Loading trees...</h2>}>
      {trees.map((tree: Tree) => {
        return <Card key={tree.botanicalName} tree={tree} />;
      })}
    </Suspense>
  );
};

export default Grid;
