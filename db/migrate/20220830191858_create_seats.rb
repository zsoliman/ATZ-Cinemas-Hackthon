class CreateSeats < ActiveRecord::Migration[7.0]
  def change
    create_table :seats do |t|
      t.integer :seat_num
      t.integer :theater_id
      t.boolean :is_available

      t.timestamps
    end
  end
end
