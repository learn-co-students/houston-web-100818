class Ability
    attr_accessor :name, :coolness, :hero

    @@all = []
    
    def initialize(name, coolness, hero)
        self.name = name
        self.coolness = coolness
        self.hero = hero
        @@all << self
    end

    def label
        "#{name} (#{coolness})"
    end

    def self.all
        @@all
    end
end