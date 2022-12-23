import { Suspense } from 'react';
import trees, {Tree} from 'data/trees'

const Grid = () => {
    
    return (
        <Suspense fallback={<h2>Loading trees...</h2>}>
        {
            trees.map((tree: Tree) => {
                return <div key={tree.botanicalName}>{tree.botanicalName}</div>
            })
        }
        </Suspense>
    )
}

export default Grid