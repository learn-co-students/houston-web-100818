class Master < ApplicationRecord
    has_many :dragons, dependant: :destroy
end
