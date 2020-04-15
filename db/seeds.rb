# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!(username:'regina', password:'123456', email:'r@r.com')

# post1 = Post.create!(user_id: user1.id, caption:'im posting', link_to_product:'sladk', product_name:'fake product', image_link:'wwww.fakeproduct.com')

# comment1 = Comment.create!(caption:'im a comment', user_id: user1.id, post_id: post1.id)
comment2 = Comment.create!(caption:'im a comment again', user_id: 1, post_id: 7)