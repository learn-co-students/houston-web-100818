class AddEmailToMasters < ActiveRecord::Migration[5.2]
  def change
    add_column :masters, :email, :string
  end
end
