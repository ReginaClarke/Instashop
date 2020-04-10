class Post < ApplicationRecord
  has_one_attached :image
  has_one :user  #should change to belongs to once user column is added
  has_many :comments
end
