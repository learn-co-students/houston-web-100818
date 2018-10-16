# orms-custom-intro

## SWBATs

* Define Object Relational Mapper \(ORM\)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models

## Resources

* [Example Video ](https://www.youtube.com/watch?v=fbXSQ7ehoW8)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/ruby/intro-orms)

## Outline

```text
10m One to Many Relationship in SQL
15m Many to Many Relationship in SQL
 5m CRUD in SQL and Ruby
 5m ORM Pattern
10m App Demo and Structure
20m Selecting and Inserting
10m Saving and Updating
===
75m Total
```

### One to Many Relationship in SQL

* Foreign key versus primary key
* Which table is the foreign key placed on? \(has many or belongs to\)
* Show the pain of not putting the foreign key on the child
* Find all books written by a certain author by ID

### Many to Many Relationship in SQL

* who is the parent? both
* how do we implement an author having many books and a book having many authors
* join table having two foreign keys
* write the sql to find all books written by a certain author given their name
* highlight order of writing sql syntax
* another example with tweets and tags

### CRUD in SQL and Ruby

* What are the 4 ways we can interact with data?
* How do we write these in SQL?
* How do we want to write these in Ruby?
* How do we map these SQL applications to Ruby?

### ORM Pattern

* each table in the db should correspond to our ruby class \(models\)
* each row represents an instance in the database
* each column represents an attribute for our instances
* why do we need a database? persistence

### App Demo and Structure

* demo current app
* little bit of file structure and bundler review
* SQLite3 gem is giving you code to interact with SQLite3 database
* Creating rake tasks
* Environment file
* Gemfile
* Run file

### Selecting and Inserting

* Working with SQLite3 Gem in the console
* class with attributes and initialize method
* write all class method with db execute call
* map results from select \* to create new tweet instances
* mass assignment
* adding IDs to mapped instance

### Saving and Updating

* writing the save method
* parameterized queries and database security
* what's the difference between calling new and create?
