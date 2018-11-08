class Master < ApplicationRecord
    has_many :dragons, dependent: :destroy
    accepts_nested_attributes_for :dragons

    validates :name, length: { in: 3..10 }
    validates :email, email: true
end