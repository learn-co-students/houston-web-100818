class Dragon < ApplicationRecord
    belongs_to :master, optional: true
    has_many :dragon_abilities
    has_many :abilities, through: :dragon_abilities
end
