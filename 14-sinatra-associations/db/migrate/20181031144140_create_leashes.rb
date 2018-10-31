class CreateLeashes < ActiveRecord::Migration[5.2]
  def change
    create_table :leashes do | t |
      t.string :color
      t.integer :length
      t.belongs_to :dog
    end
  end
end
