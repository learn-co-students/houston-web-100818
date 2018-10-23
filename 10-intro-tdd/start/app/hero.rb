class Hero

    attr_accessor :abilities

    # Accepts an array of abilities
    # Each ability will be represented by a hash with a name and "coolness" rating
    def initialize(abilities)
        self.abilities = abilities
    end

    # Returns the heros coolest ability
    def coolest_ability
        coolest_ability = nil
        abilities.each do | current_ability |  
            if coolest_ability == nil || current_ability[:coolness] > coolest_ability[:coolness]
                coolest_ability = current_ability
            end
        end
        coolest_ability
    end

    # Returns abilities Ordered Alphabetically 
    def ordered_abilities
       
    end

end