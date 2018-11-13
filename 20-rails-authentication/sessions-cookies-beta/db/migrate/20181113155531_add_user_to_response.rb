class AddUserToResponse < ActiveRecord::Migration[5.2]
  def change
    add_column :responses, :user_id, :integer
  end
end
