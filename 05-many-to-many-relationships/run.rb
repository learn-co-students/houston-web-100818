require 'pry'
require_relative './Hero'
require_relative './Ability'

steve = Hero.new('Steve', 'Rodgers')
thor = Hero.new('Thor', 'Odinson')


strength = Ability.new('Super Strength', 5, steve)
shield = Ability.new('Gravity Defying Shield', 10, steve)
lightning = Ability.new('Lightning', 10, thor)


binding.pry
0