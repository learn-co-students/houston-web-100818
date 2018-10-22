class CreateCellPhones < ActiveRecord::Migration[5.2]
  def change
    create_table :cell_phones do |t|
      t.string :model
      t.string :owner
    end
  end
end
