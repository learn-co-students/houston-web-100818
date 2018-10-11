# One To Many Relationships

## Vocabulary Terms:

- Relationships
  - One to Many
  - Many to Many
  - One to One
- Model
- Domain
- Implicit Self
- Single Source of Truth


## Outline

- Intro (5 min)
  - Review of where we left our Hero Class
  - What if we wanted to add a label, which includes the name and the coolness combined in  a string?
    - We are trying to add behavior to our abilities 
    - They would need to be objects as well
    - Every (One) Hero has many Abilities
- Relationships (10 min)
  - In programming we refer to three types of relationships
    - One to Many
    - Many to Many
    - One to One
  - What are some other examples of one to many relationships?
    - In each of these examples, we can identify models and a domain 
      - What is a model?
      - What is a domain?
- Turning Abilities into Objects (20 min)
  - How do I define a new object type?
  - When will the initialize method be called?
  - How can I add accessibility to the requested properties?
- Refactoring  our character to have a single source of truth (20 min)
  - What should happen if we reassign an ability's hero property to another hero?
  - What actually happens if we reassign an ability's hero property to another hero?
  - These are the types of bugs we encounter if we define a relationship in multiple ways, instead we should rely on a single source of truth by defining one side of a relationship through behavior