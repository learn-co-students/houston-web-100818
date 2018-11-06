class CreateDragons < ActiveRecord::Migration[5.2]
  def change
    create_table :dragons do |t|
      t.string :name
      t.string :height
      t.string :weight
      t.string :image
      t.belongs_to :master

      t.timestamps
    end
  end
end
