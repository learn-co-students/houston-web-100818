class AddAgeToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :age, :integer
  end
end
