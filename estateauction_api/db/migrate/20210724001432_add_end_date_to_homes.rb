class AddEndDateToHomes < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :endDate, :string
  end
end
