class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: :create

  # GET /users
  def index
    @users = User.all

    render json: @users #need to hide password digest
  end

  # GET /users/1
  def show
    render json: @user.frontend_data
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ user_id: @user.id });  #username was here; this goes into payload
      render json: { user: @user.frontend_data, token: @token }, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:username, :password, :email, :industry, :business_website, :first_name, :last_name, :b2b_b2c_c2c, :user_type)
  end
end
