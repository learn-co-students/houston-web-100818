class CreateDragons < ActiveRecord::Migration[5.2]
  def change
    create_table :dragons do |t|
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
