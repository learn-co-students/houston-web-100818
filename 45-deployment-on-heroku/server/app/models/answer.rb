class Answer < ApplicationRecord
  belongs_to :question
  # belongs_to :next_question, class_name: 'Question'
end
