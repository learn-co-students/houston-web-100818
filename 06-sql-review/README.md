# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `heroes.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Deliverables

1. Write the SQL to return all of the rows in the heroes table:

```SQL
SELECT * FROM heroes
```

2. Write the SQL to select the hero with the first name "Tony"

```SQL
SELECT * FROM heroes WHERE first_name = "Tony"
```

3. Write the SQL to update Tonys last name to 'Stark'

```SQL
UPDATE heroes SET last_name = "Stark"  WHERE id = 1 
```

4. Write the SQL to create a table named 'abilities' with an autoincrementing ID that's a primary key, a name field of type text, and a coolness field of type text

```sql
CREATE TABLE abilities (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name`	TEXT,
    `coolness` TEXT
)
```

5. Write the SQL to add an ability

```sql
INSERT INTO abilities (name, coolness) VALUES ('Super Strength', 5)
```

6. Associate that ability with a hero

```sql
CREATE TABLE hero_abilities (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `hero_id`	INTEGER,
    `ability_id` INTEGER
)
```

```sql
INSERT INTO hero_abilities (hero_id, ability_id) VALUES (1, 2)
```

7. Write the SQL to return the abilities for a hero
```sql
SELECT * FROM heroes 
JOIN hero_abilities ON heroes.id = hero_abilities.hero_id
JOIN abilities ON abilities.id = hero_abilities.ability_id
```

8. Write the SQL to delete all heroes where lucky is equal false
```sql
DELETE FROM heroes WHERE lucky = 0
```


## BONUS 

9. Write the SQL to display a list of heroes names next to the number of abilities they have
```sql

```

10. Write the SQL to return the names of all of the heroes with a given ability

```sql

```

11. I want to return the names of the heroes with the number of abilities they have
    * who have a last name
    * and have move than 1 ability
    * in order of the number of abilities they have from greatest to least

```sql

```