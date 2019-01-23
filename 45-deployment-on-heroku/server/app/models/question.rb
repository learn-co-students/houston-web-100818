class Question < ApplicationRecord
    has_many :options, class_name: 'Answer'
    accepts_nested_attributes_for :options
end
