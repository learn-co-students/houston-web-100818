class Hero 

    attr_accessor :first_name, :last_name

    @@all = []

    def initialize(first_name, last_name) 
        @first_name = first_name
        @last_name = last_name
        @@all << self
    end

    def full_name
        @first_name + ' ' + @last_name
    end

    def abilities
        Ability.all.select do | ability |
            ability.hero == self
        end
    end

    def coolest_ability
        coolest_level_found = -Float::INFINITY
        coolest_ability_found = nil
        self.abilities.each do | ability |
            if ability.coolness > coolest_level_found 
                coolest_level_found = ability.coolness
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