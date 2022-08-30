class CreateTheaters < ActiveRecord::Migration[7.0]
  def change
    create_table :theaters do |t|
      t.integer :capacity
      t.string :genre

      t.timestamps
    end
  end
end
