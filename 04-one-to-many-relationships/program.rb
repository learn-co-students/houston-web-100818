require 'pry'

class Hero 

    attr_accessor :first_name, :last_name
    attr_reader :abilities

    @@all = []

    def initialize(first_name, last_name, abilities) 
        @first_name = first_name
        @last_name = last_name
        @abilities = abilities
        @@all << self
    end

    def full_name
        binding.pry
        @first_name + ' ' + @last_name
    end

    def coolest_ability
        coolest_level_found = -Float::INFINITY
        coolest_ability_found = nil
        @abilities.each do | ability |
            if ability[:coolness] > coolest_level_found 
                coolest_level_found = ability[:coolness]
                coolest_ability_found = ability
            end
        end
        coolest_ability_found
    end

    def self.with_most_abilities
        current_highest_ability_count = @@all[0].abilities.length
        current_highest_ability_hero = @@all[0]
        @@all.each do | hero |
            if hero.abilities.length > current_highest_ability_count
                current_highest_ability_count = hero.abilities.length
                current_highest_ability_hero = hero
            end
        end
        current_highest_ability_hero
    end
end

steve = Hero.new('Steve', 'Rodgers', [
    {
        coolness: 5,
        name: 'Super Strength'
    },
    {
        coolness: 10,
        name: 'Gravity Defying Shield'
    }
])

thor = Hero.new('Thor', 'Odinson', [
    {
        name: 'Lightening',
        coolness: 10
    }
])

binding.pry
0