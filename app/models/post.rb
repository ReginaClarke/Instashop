class Post < ApplicationRecord
  belongs_to :user  #should change to belongs to once user column is added
  has_many :comments
end
