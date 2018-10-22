# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_22_145141) do

  create_table "apps", force: :cascade do |t|
    t.string "name"
    t.string "description"
  end

  create_table "cell_phones", force: :cascade do |t|
    t.string "model"
    t.string "owner"
  end

  create_table "clowns", force: :cascade do |t|
    t.string "name"
    t.float "show_size"
    t.integer "terror_factor"
    t.string "nose_color"
  end

  create_table "downloads", force: :cascade do |t|
    t.integer "cell_phone_id"
    t.integer "app_id"
    t.datetime "download_date"
    t.index ["app_id"], name: "index_downloads_on_app_id"
    t.index ["cell_phone_id"], name: "index_downloads_on_cell_phone_id"
  end

  create_table "shows", force: :cascade do |t|
    t.integer "clown_id"
    t.string "name"
    t.integer "price"
    t.index ["clown_id"], name: "index_shows_on_clown_id"
  end

end
