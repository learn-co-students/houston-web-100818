class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |table|
      table.belongs_to :clown
      table.string :name
      table.integer :price
    end
  end
end
