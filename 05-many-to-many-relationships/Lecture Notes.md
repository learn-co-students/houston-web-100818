# Many to Many Relationships

## Vocabulary Terms

- Join Class

## Outline

- Intro (5 min)
  - Review of our Hero class
  - Can one ability be possessed by multiple heroes?
- Many to Many Relationships (10 min)
  - Are rare. Lets look at some examples.
    - Most of the time what we percieve as a many-to-many relationships can be better defined as two one-to-many relationships
  - Are difficult for computers to comprehend
    - Even if a many-to-many relationship can't be logically broken down into two one-to-many relationships, we have to pretend that it can, and create an arbitrary name for our joining entity
- Re-Build the relationship between Ability and Hero as a Many to Many Relationship (20 min)
  - How do I define a new object type?
  - When will the initialize method be called?
  - What properties should my initialize method take?
    - How many properties will it have?
  - How can I add accessibility to those properties?
  - How can we implement the relationship methods ( heroes and abilities )?
- Building out a many to many relationship between Heroes and Teams (20 min)