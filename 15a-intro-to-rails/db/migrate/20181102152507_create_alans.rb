class CreateAlans < ActiveRecord::Migration[5.2]
  def change
    create_table :alans do |t|
      t.string :name
      t.string :polo_color

      t.timestamps
    end
  end
end
