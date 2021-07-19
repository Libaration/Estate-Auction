class AddBidToHomes < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :bid, :integer
  end
end
