# Deliverables
Add new methods to our `Hero` Class. When we are finished, a hero should have the following methods:
* `Hero#initialize` which accepts a name. The name should be accessible
* `Hero#abilities` that returns an array of Ability instances
* `Hero#gain_ability` that takes a name and a coolness level, creates a new Ability, and adds it to the hero's ability collection
* `Hero#coolest_ability` that returns the instance of an ability
* `Hero.all` that returns all the Heroes created.

Create a Ability class. The class should have these methods:
* `Ability#initialize` which accepts a name, and a coolness level. Each should be accessible
* `Ability#heroes` that returns an array of Hero instances
* `Ability#label` that returns a string in the format of "#{name} (#{coolness})"
* `Ability.all` that returns all the Abilities created.
