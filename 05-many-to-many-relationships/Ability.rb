class Ability
    attr_accessor :name, :coolness

    @@all = []
    
    def initialize(name, coolness)
        self.name = name
        self.coolness = coolness
        @@all << self
    end

    def heroes
        ability_heroes = HeroAbility.all.select do | ability_hero | 
            ability_hero.ability == self
        end
        ability_heroes.map do | ability_hero |
            ability_hero.hero 
        end
    end

    def label
        "#{name} (#{coolness})"
    end

    def self.all
        @@all
    end
end