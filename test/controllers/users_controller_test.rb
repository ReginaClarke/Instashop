require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { b2b_b2c_c2c: @user.b2b_b2c_c2c, business_website: @user.business_website, email: @user.email, first_name: @user.first_name, industry: @user.industry, last_name: @user.last_name, password_digets: @user.password_digets, user_type: @user.user_type, username: @user.username } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { b2b_b2c_c2c: @user.b2b_b2c_c2c, business_website: @user.business_website, email: @user.email, first_name: @user.first_name, industry: @user.industry, last_name: @user.last_name, password_digets: @user.password_digets, user_type: @user.user_type, username: @user.username } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
