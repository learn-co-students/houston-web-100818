# ruby-hashketball-review

_This is almost always the first lecture of the entire program for students, and they are usually pretty quiet for these first few. Just give them some time to get accustomed and some time to ask questions as well._

_In lectures, try to avoid asking "Does that make sense?" or "Any questions?". Instead, try to ask open-ended probing questions which reinforce the learning objectives while letting students answer them._

## SWBATs

* Distinguish between data types in Ruby
* Show how to look up documentation for data types in Ruby
* Demonstrate the use of common Array methods
  * `#each`
  * `#map`
  * `#select`
  * `#find`
* Differentiate array methods by their respective return values
* Define the Single Responsibility Principle
* Employ test-driven development best practices in their labs
  * `rspec --fail-fast` handle one error at a time
  * Red, Green, Refactor
  * Make it work \(shameless green\), make it right, make it fast

## Resources

* [Example Video](https://youtu.be/n1wlq-XM8SM)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/ruby/hashketball-review)

## Outline

```text
 2m  Talk about lectures
 3m  Working with the spec and intro TDD
 3m  Build the game hash
10m  Define the problem
 5m  Digression on `map`
10m  Student Exercise
 5m  Apply to `get_players`
10m  Digression with `select` and `find`
10m  Single Responsibility Priniciple (SRP) and putting it together
===
 1h  Total 
```

### Talk about lectures

Labs are deployed before the lectures. You should let us know if we make mistakes in the lecture. Recommend not trying to code along. Lecture notes and code are uploaded. There will be activties during lecture so still bring your laptop. Try to just observe and understand concepts during lecture.

### Working with the spec and TDD

It's annoying to go scroll up through a long list of errors to get to the top, so instead just run all tests until we reach the first failure and then stop.

```bash
rspec --fail-fast
```

Open the spec folder, and inspect the specs. Alter one of the specs with a `puts` statement to demonstrate that this is just Ruby code that they already know.

Run one test at a time using the line number.

```bash
rspec /path/to/spec.rb:line_no
```

Talk about the feedback loop, reading error messages, reading spec failures, and correcting only one error at a time.

### Build the game hash

Begin with a completed `game_hash` method. To meet the learning objectives, it's easier to use a slightly different version than the student-facing lab, where each `players` key points to an array rather than a hash where the names are keys. _This allows us to focus on enumerable methods such as map, select, etc._

Make sure to start with the following, which is what students saw in the lab, but change it to the commented out code below. Just warn students up front and they can usually help in walking through the problem.

```ruby
require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson" => {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        "Reggie Evans" => {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        "Brook Lopez" => {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        "Mason Plumlee" => {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        "Jason Terry" => {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      }
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien" => {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        "Bismak Biyombo" => {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        "DeSagna Diop" => {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        "Ben Gordon" => {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        "Brendan Haywood" => {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      }
    }
  }
end
# def game_hash
#   {
#     home: {
#       team_name: "Brooklyn Nets",
#       colors: ["Black", "White"],
#       players: [
#         {
#           player_name: "Alan Anderson",
#           number: 0,
#           shoe: 16,
#           points: 22,
#           rebounds: 12,
#           assists: 12,
#           steals: 3,
#           blocks: 1,
#           slam_dunks: 1
#         }, {
#           player_name: "Reggie Evans",
#           number: 30,
#           shoe: 14,
#           points: 12,
#           rebounds: 12,
#           assists: 12,
#           steals: 12,
#           blocks: 12,
#           slam_dunks: 7
#         }, {
#           player_name: "Brook Lopez",
#           number: 11,
#           shoe: 17,
#           points: 17,
#           rebounds: 19,
#           assists: 10,
#           steals: 3,
#           blocks: 1,
#           slam_dunks: 15
#         }, {
#           player_name: "Mason Plumlee",
#           number: 1,
#           shoe: 19,
#           points: 26,
#           rebounds: 12,
#           assists: 6,
#           steals: 3,
#           blocks: 8,
#           slam_dunks: 5
#         }, {
#           player_name: "Jason Terry",
#           number: 31,
#           shoe: 15,
#           points: 19,
#           rebounds: 2,
#           assists: 2,
#           steals: 4,
#           blocks: 11,
#           slam_dunks: 1
#         }
#       ]
#     },
#     away: {
#       team_name: "Charlotte Hornets",
#       colors: ["Turquoise", "Purple"],
#       players: [
#         {
#           player_name: "Jeff Adrien",
#           number: 4,
#           shoe: 18,
#           points: 10,
#           rebounds: 1,
#           assists: 1,
#           steals: 2,
#           blocks: 7,
#           slam_dunks: 2
#         }, {
#           player_name: "Bismak Biyombo",
#           number: 0,
#           shoe: 16,
#           points: 12,
#           rebounds: 4,
#           assists: 7,
#           steals: 7,
#           blocks: 15,
#           slam_dunks: 10
#         }, {
#           player_name: "DeSagna Diop",
#           number: 2,
#           shoe: 14,
#           points: 24,
#           rebounds: 12,
#           assists: 12,
#           steals: 4,
#           blocks: 5,
#           slam_dunks: 5
#         }, {
#           player_name: "Ben Gordon",
#           number: 8,
#           shoe: 15,
#           points: 33,
#           rebounds: 3,
#           assists: 2,
#           steals: 1,
#           blocks: 1,
#           slam_dunks: 0
#         }, {
#           player_name: "Brendan Haywood",
#           number: 33,
#           shoe: 15,
#           points: 6,
#           rebounds: 12,
#           assists: 12,
#           steals: 22,
#           blocks: 5,
#           slam_dunks: 12
#         }
#       ]
#     }
#   }
# end
```

### Define the problem

Focusing on the first method `num_points_scored` we need to

```ruby
def num_points_scored(player_name)
  # get a list of all the players
  # find the player whose name matches the argument 'player_name'
  # return that player's points
end
```

Wouldn't it be great if we lived in a world where we could say `players = get_all_players`

Let's define it!

**Q:** what does `game_hash.size` return?

**A:** 2

**Q:** do we care about the keys home/ away for this problem

**A:** No. so reject them!

`game_hash.values` gives us back a data structure shaped like this

```text
[{name: '...',colors: [], players: [{},{},{},...]}, {name: '...',colors: [], players: [{},{},{},...]}]
```

that it would be great if we could transform to look like this:

```text
[[{},{},{},...], [{},{},{},...]]
```

so we can call `.flatten` on it and get all the players

### Digression on `map`

Cover how `map` is the method to use when you have an array of `n` things and you want back `n` things each transformed in some way. Write a method `square_all` that receives an array if Integers and returns each number squared.

> **Note:** this is a good opportunity to show students the interactive ruby console \(IRB\) in case they haven't used it yet. Write the `square_all` method in IRB and demo how to use it.

### Student Exercise

Students take 5 or 6 minutes to do this exercise:

```ruby
# Define a method called get_names that takes an array of instructors and returns just their names
instructors = [{name: 'Alex', hometown: 'upstate ny', mood: 'excited'}, {name: 'rachel', hometown: 'maine'}, {name: 'maxwell', hometwon: 'brookyln'}]
def get_names(instructors)
#   solution
#   instructors.map do |instructor|
#     instructor[:name]
#   end
end
```

> **Note:** Look out for students using `each`, or trying to iterate over each instructor hash `if key == :name` type thing\).

### Apply to current problem

```ruby
def get_players
  # what values are available here? use `binding.pry` inside of
  # `num_points_scored` to get the spec to stop at this point.
  binding.pry
end

# build this function iteratively using what we learned from
# `map` digression. at each step, continue using `binding.pry`
# until a solution is reached.

def get_players
  game_hash.values.map do |team_info|
    team_info[:players]
  end.flatten
end
```

cover return values, everything to left of the dot evaluates, etc.

### Repeat with `select` and `find`

Similar to how `map` was broken down, talk about using `select` to find all even nums in array or equivalent. Cover the difference between `select` and `find`. I like to write some weird code \(and point out it's weird\) to test their understanding.

Poll the class by show of hands what they think return values will be.

```ruby
arr = (1..100).to_a

# what do the following return?

arr.map do |num|
  num.even?
end

arr.select do |num|
  7
end
```

Next, build out `find_player(players, player_name)` to find a player by name. This will demonstrate using `find` to get the first player by that name.

### Single Responsibility and put it all together

Here we just want to emphasize that we were breaking down the responsibility of each method to it's smallest parts, so that _every method has one job_.

```ruby
def num_points_scored(player_name)
  # get a list of all the players
  players = get_players
  # [{}, {}, {}, {}...]

  # find the player whose name matches the argument 'player_name'
  find_player(players, player_name)[:points]

  # return that player's points
end

def shoe_size(player_name)
  players = get_players
  find_player(players, player_name)[:shoe]
end
```

> **Note:** You'll have to tell the students to clap at the end of the lecture. Awkward, but they won't know.
