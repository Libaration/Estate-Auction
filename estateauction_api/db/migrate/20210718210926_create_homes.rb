class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.text :address
      t.integer :bathrooms
      t.integer :price
      t.belongs_to :user, foreign_key: true
      t.text :url
      t.timestamps
    end
  end
end
