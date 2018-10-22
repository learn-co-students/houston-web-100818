class CreateDownloads < ActiveRecord::Migration[5.2]
  def change
    create_table :downloads do |t|
      t.belongs_to :cell_phone
      t.belongs_to :app
      t.datetime :download_date
    end
  end
end
