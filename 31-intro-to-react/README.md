# Intro to React

## Vocabulary

* React
* JSX
* Babel
* Webpack
* Bundle
* NPM
* `create-react-app`
* `state`
* `props`
* `import`
* `export`
  * Named and Default

## Deliverables

* Make a list simple profile edit page to work so that names can be live updated in the header as we edit them in the form

## Outline (Part I)

- Survey Review

- Pain points of Wild West JavaScript (valueless decisions)

  - Too many ways to render elements (and a lot of them were verbose)
  - Event listeners were a pain (?)
  - Code Seperation was difficult
  - It was non-performant
  - **React** is a library which helps us to overcome these pain points and limit valueless choices

- Using React from a CDN
  ```
  <script src="node_modules/react/umd/react.development.js"></script>
  <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
  ```
  - React is just normal JavaScript- nothing magic
  - React.createElement is ugly and verbose

- JSX, Babel, and Webpack

  - **JSX** is effectively another language which can be compiled to javascript 
    - Compare a JSON object to an XML object
  - **Babel** is a tool which will help us compile JSX into javascript
  - **Webpack** is a tool which combines mulitple javascript and css files into a single **bundle**
  - **NPM** is a tool for managing JavaScript projects
    - We only really need to worry about `npm install` and `npm start`
  - Using **`create-react-app`**, we set up an environment with Babel and Webpack already setup, working together so that we can write JSX and ES6 JavaScript out of the box

## Outline (Part II )

- Writing JSX
  - We interpolate into jsx using `{}`
    - An aside on the many uses of `{}`
- Inline Events
  - Use inline events to run code when a user types in a text box
- State
  - Use **`state`** to keep track of the variable data of our application
  - Just a grouping of the global variables we would create in Mod 3
- Seperation of Concerns: An introduction to components
  - Revisit the single responsibility principle
  - We want our "view" code to be responsibile for one visual element and one visual element **only**
  - Components can be created by functions or classes
- Props
  - Introduce **`props`** as a way to pass our "users" to another component
- Code organization 
  - Typically we will put each component in its own file, then include them with **`import`**.
  - The difference between **named** and **default** exports
  - An aside on the dangers of `export default`