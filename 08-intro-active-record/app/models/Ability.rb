class Ability < ActiveRecord::Base
    has_many :hero_abilities
    has_many :heros, through: :hero_abilities
end