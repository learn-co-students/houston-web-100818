class App < ActiveRecord::Base
  has_many :downloads
  has_many :cell_phones, through: :downloads
end