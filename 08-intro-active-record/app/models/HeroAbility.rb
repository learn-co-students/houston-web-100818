class HeroAbility < ActiveRecord::Base
    belongs_to :ability
    belongs_to :hero
end