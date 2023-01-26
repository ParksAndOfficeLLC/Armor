class AddColumnsToList < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :order_id, :integer
  end
end
