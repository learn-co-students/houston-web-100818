class Dragon < ApplicationRecord
    has_many :dragon_abilities
    has_many :abilities, through: :dragon_abilities
    accepts_nested_attributes_for :abilities

    def title
        "#{self.name} The Terrible"
    end
end
