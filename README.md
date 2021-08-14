# The Arboretum

The Arboretum is a personal React project which uses Webpack for bundling and Babel for transpilation. It uses Styled-components and React testing library.

The motivation behind this project is to document the list of trees currently on the farm. 

## Requirements

- List individual trees with data consisting of their name, category, image etc.
- Ability to add a tree with it's required data
- Filter trees based on category, size and type
- Add notes to a tree
- Show a map version with trees plotted

### Issues faced 

- Original implementation of showing a map version was to use Canvas, however it became expensive to compute.
- Volume of images and handling them dynamically
- Runtime regeneratorRuntime is not defined during asynchronous tests, had to include regenerator-runtime package and import it in the jest setup tests.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.