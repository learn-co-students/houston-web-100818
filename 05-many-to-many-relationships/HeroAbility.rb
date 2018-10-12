class HeroAbility

    attr_accessor :hero, :ability
    
    @@all = []

    def initialize(hero, ability)
        self.hero = hero
        self.ability = ability
        @@all << self
    end


    def self.all
        @@all
    end

end