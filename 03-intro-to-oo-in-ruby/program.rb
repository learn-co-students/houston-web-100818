require 'pry'

class Hero 

    @@all = []

    def initialize(first_name, last_name, abilities) 
        @first_name = first_name
        @last_name = last_name
        @abilities = abilities
        @@all << self
    end

    attr_accessor :first_name
    # attr_reader :first_name - Only Reader Access
    # attr_writer :first_name - Only Writer Access
    # def first_name
    #     @first_name
    # end

    # def first_name=(value)
    #     @first_name = value
    # end

    attr_accessor :last_name
    # def last_name
    #     @last_name
    # end

    # def last_name=(value)
    #     @last_name = value
    # end

    def full_name
        binding.pry
        @first_name + ' ' + @last_name
    end

   attr_reader :abilities

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

Hero.with_most_abilities
binding.pry
# steve.coolest_ability
0