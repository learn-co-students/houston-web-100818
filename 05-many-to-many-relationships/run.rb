require 'pry'
require_relative './Hero'
require_relative './Ability'
require_relative './HeroAbility'

steve = Hero.new('Steve', 'Rodgers')
thor = Hero.new('Thor', 'Odinson')

strength = Ability.new('Super Strength', 5)
shield = Ability.new('Gravity Defying Shield', 10)
lightning = Ability.new('Lightning', 10)

ha1 = HeroAbility.new(steve, strength)
ha2 = HeroAbility.new(steve, shield)
ha3 = HeroAbility.new(thor, lightning)
ha4 = HeroAbility.new(thor, strength)

binding.pry
0