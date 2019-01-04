# Set up Cheat Sheet

* Create React App

* Install: 
    * React Router
    * React Router DOM
    * Redux
    * React Redux
    * Redux Thunk (if you need it)

* Get rid of stuff you don't need
    * CSS, testing files, logo, etc.

* Set up Redux
    * Create a store
        * Create and pass in a reducer 
        * Create and pass in an initial state
        * Pass in middleware for thunk and/or dev tools (if you need to)
    * Wrap the app the Provider

* Set up the Router
    * Add the Router to your app component
    * Create a history module like so:
    ```
    import createHistory from 'history/createBrowserHistory'
    export default createHistory()
    ```
    * Pass the history object as a prop to your Router
    * Import the history module into your reducer so that you can manipulate the users current location/url