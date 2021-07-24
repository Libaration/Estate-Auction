class AddDefaultBidValueToHomes < ActiveRecord::Migration[6.1]
  def change
    change_column :homes, :bid, :integer, :default => 0
  end
end
