class Hero < ActiveRecord::Base
    has_many :hero_abilities
    has_many :abilities, through: :hero_abilities
    # Creates getter & setter for us:
    # def hero_abilities
    #     HeroAbility.where(hero_id:self.id)
    # end
end