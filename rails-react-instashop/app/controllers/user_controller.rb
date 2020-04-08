class UserController < ApplicationController

  #GET/users
  def index
    @users = User.order(:id)

    render json: @teachers
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @users = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @users
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end
end
