class AddColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :poster_img_src, :string
    add_column :movies, :background_img_src, :string
  end
end
