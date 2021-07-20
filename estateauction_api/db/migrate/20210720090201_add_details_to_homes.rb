class AddDetailsToHomes < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :details, :text
  end
end
