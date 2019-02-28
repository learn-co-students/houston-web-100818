class CreateHeroes < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do | table |
      table.text :first_name
    end
  end
end
