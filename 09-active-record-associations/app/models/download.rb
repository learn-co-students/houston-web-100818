class Download < ActiveRecord::Base
  belongs_to :cell_phone
  belongs_to :app
end