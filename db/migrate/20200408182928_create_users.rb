class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :industry
      t.string :business_website
      t.string :first_name
      t.string :last_name
      t.string :b2b_b2c_c2c
      t.string :user_type

      t.timestamps
    end
  end
end

end
