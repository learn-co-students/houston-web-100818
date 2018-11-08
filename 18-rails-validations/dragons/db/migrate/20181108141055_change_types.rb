class ChangeTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :dragons, :height, :integer
    change_column :dragons, :weight, :integer
  end
end
