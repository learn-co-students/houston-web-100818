class UsersController < ApplicationController
    before_action :define_current_user
    
    def create
        user = User.create(user_params)
        session[:current_user_id] = user.id
        redirect_to '/login'
    end
    
    def index
        @users = User.all
    end
    
    def update
        @user.update(user_params)
        redirect_to @user
    end
    
    def destroy
        if @user == current_user
            @user.destroy
            session.clear
            redirect_to users_path
        else
            flash[:error_message] = "You are not authorized to destroy #{@user.first_name} #{@user.last_name}"
            redirect_to @user
        end
    end
    
    def define_current_user
        if params[:id]
            @user = User.find(params[:id])
        else
            @user = User.new
        end
    end
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password)
    end
end