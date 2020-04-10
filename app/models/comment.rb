class Comment < ApplicationRecord
  has_one :user  #should change to belongs to once user column is added
  has_one :post #should change to belongs to once post column is added
end
