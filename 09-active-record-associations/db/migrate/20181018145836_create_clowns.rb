class CreateClowns < ActiveRecord::Migration[5.2]
  def change
    create_table :clowns do |table|
      table.string :name
      table.float :show_size
      table.integer :terror_factor
    end
  end
end
