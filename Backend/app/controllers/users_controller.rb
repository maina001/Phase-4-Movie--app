class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update ]
  skip_before_action :authorized, only: [:create, :show]
  
  # GET /users/1
  def show
    # current_user = User.find(session[:user_id])
    current_user = User.find(params[:id])
    # current_user = User.find(params[:id])
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "Something went wrong"}, status: :unprocessable_entity
    end 
  end

  # POST /users
  def create
    user = User.create(user_params)

    if user.valid?
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PUT /users/1
  # Reset password 
  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :year_born, :password)
    end
end
