class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :caption
      t.string :link_to_product

      t.timestamps
    end
  end
end
