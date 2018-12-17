# Thinking in React

1. Create Component Hierarchy
   * App
     * Title
     * TodoList
       * ListItem []
     * CrossedOffList
       * CrossedOffListItem []

2. Make a static version of the app
3. Make a data hierarchy
   * Does it remain unchanged over time? If so, it probably isn’t state.
   * Can you compute it based on any other state or props in your component? If so, it isn’t state.
   * Structure
     * List Title
       * Items[]
         * Name
         * Description
         * Done
4. Attach data to component hierarchy
   * For each piece of state
     * Identify a common owner for that data

5. Add Inverse Data flow (listen for user input)
   * Pass callbacks down to children to update their parents state