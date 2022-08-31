class CreateSeats < ActiveRecord::Migration[7.0]
  def change
    create_table :seats do |t|
      t.string :seat_num
      t.integer :theater_id
      t.boolean :is_available
      t.integer :ticket_id

      t.timestamps
    end
  end
end
