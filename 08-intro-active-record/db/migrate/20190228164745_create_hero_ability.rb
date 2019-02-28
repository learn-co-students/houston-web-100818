class CreateHeroAbility < ActiveRecord::Migration[5.2]
  def change
    create_table :hero_abilities do | table |
      table.integer :hero_id
      table.integer :ability_id
    end
  end
end
