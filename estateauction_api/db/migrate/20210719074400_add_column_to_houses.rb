class AddColumnToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :bedrooms, :text
  end
end
