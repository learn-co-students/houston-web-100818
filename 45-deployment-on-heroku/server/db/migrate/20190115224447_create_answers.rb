class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :content
      t.belongs_to :question, foreign_key: true
      t.belongs_to :next_question

      t.timestamps
    end
  end
end
