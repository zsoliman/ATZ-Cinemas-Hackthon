class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.text :description
      t.string :rating
      t.integer :runtime
      t.integer :theater_id
      t.datetime :release_date
      t.string :genres

      t.timestamps
    end
  end
end
