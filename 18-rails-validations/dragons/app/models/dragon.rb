class Dragon < ApplicationRecord
    belongs_to :master, optional: true
    has_many :dragon_abilities
    has_many :abilities, through: :dragon_abilities

    validates :name, presence: true
    validates :weight, numericality: { less_than_or_equal_to: 10000,  only_integer: true }
    validates_inclusion_of :height, :in => 3..100
    validates :abilities, length: { maximum: 3 }
end
