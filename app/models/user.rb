class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments

  #not necessary below
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  #hiding password_digest from returning
  def frontend_data
    {
      id: id,
      username: username,
      email: email,
      industry: industry,
      business_website: business_website,
      first_name: first_name,
      last_name: last_name,
      b2b_b2c_c2c: b2b_b2c_c2c,
      user_type: user_type,
      created_at: created_at,
      updated_at: updated_at,
      # posts: posts,
    }
  end
end
