class ChangeColumnInHomes < ActiveRecord::Migration[6.1]
  def change
    change_column :homes, :endDate, :text
  end
end
