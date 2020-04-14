class Comment < ApplicationRecord
  belongs_to :user  #should change to belongs to once user column is added
  belongs_to :post #should change to belongs to once post column is added
end
