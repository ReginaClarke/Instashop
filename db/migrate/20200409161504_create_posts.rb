class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :caption
      t.string :link_to_product
      t.string :image_link
      t.string :product_name
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
