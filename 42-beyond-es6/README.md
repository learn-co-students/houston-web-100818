# Beyond ES6:

## Getters/Setters, Async/Await & Decorators

- Introduction

  - What do we not like about Alan's quest?

- Async and Await

- Decorators

  - What is ECMA?
    - https://github.com/tc39/proposals
  - Jail-break Create React App 
    - Because we're renegades... 
    - `npm run eject`
    - `npm install`
    - Install @babel/plugin-proposal-decorators plugin
    - Add @babel/plugin-proposal-decorators to the plugins array in web pack config
    - Explain decoratorsBeforeExport (cause it's hilarious)

  ```javascript
  const connects = (mapStateToProps, mapDispatchToProps) => descriptor => {
    descriptor.finisher = ($class) => {
      return connect(mapStateToProps, mapDispatchToProps)($class)
    }
    return descriptor
  }
  ```

  - Connects
  - Authorize
  - Route