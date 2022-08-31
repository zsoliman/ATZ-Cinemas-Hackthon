# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_31_000605) do
  create_table "movies", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "rating"
    t.integer "runtime"
    t.integer "theater_id"
    t.integer "release_date"
    t.string "genres"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "poster_img_src"
    t.string "background_img_src"
  end

  create_table "seats", force: :cascade do |t|
    t.integer "seat_num"
    t.integer "theater_id"
    t.boolean "is_available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "theaters", force: :cascade do |t|
    t.integer "capacity"
    t.string "genre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "theater_id"
    t.integer "seat_id"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
