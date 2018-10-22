class AddNoseColorToClowns < ActiveRecord::Migration[5.2]
  def change
    add_column :clowns, :nose_color, :string
  end
end
