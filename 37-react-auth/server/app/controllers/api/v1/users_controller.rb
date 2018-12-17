class Api::V1::UsersController < Api::V1::ApplicationController
    before_action :define_current_user
    
    def create
        user = User.create(user_params)
        render json: user
    end
    
    def index
        render json: User.all
    end
    
    def show
        render json: current_user
    end
    
    def update
        current_user.update(user_params)
        render json: current_user
    end
    
    def destroy
        current_user.destroy
        render json: current_user
    end
    
    def user_params
        params.permit(:name, :email, :phone)
    end
    
    def define_current_user
        if params[:id]
            @current_user = User.find(params[:id])
        else
            @current_user = User.new
        end
    end
    
    def current_user
        @current_user
    end
end