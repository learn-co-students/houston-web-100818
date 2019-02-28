class CreateAbilities < ActiveRecord::Migration[5.2]
  def change
    create_table :abilities do | table |
      table.string :name
      table.integer :coolness
    end
  end
end