# Thinking in React



## Outline

1. Plan a component hierarchy
    * Visually, what elements are most closely related?
    * Which elements could we reuse if they were they were controlled by there own component?
2. Make a static version of the app
3. Plan a data hierarchy
    * Does it remain unchanged over time? If so, it probably isn’t state.
    *  Can you compute it based on any other state or props in your component? If so, it isn’t state.
4. Attach data to the component hierarchy
    * Identify every component that renders something based on that state.
    * Identify every component that updates that state
    * Find a common owner component (a single component above all the components that need the state in the hierarchy).
    * Either the common owner or another component higher up in the hierarchy should own the state.
    * If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
5. Add Inverse data flow
    * Identify the components which need to update a parents state
    * For each component, pass callbacks from the parent down to the identified child 
    * Call that callback in the child where appropriate to send data back to the parent

* Resources
    * Bootstrap CDN: https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
    * Fontawesome CDN:
    https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css