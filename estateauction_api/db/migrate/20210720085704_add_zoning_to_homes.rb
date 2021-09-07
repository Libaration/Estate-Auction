class AddZoningToHomes < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :zoning, :text
  end
end
