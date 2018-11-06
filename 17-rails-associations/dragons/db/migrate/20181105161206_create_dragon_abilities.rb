class CreateDragonAbilities < ActiveRecord::Migration[5.2]
  def change
    create_table :dragon_abilities do |t|
      t.belongs_to :dragon, foreign_key: true
      t.belongs_to :ability, foreign_key: true

      t.timestamps
    end
  end
end
