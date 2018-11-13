class SessionsController < ApplicationController

    before_action :define_error_message

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            # Authenticated!
            session[:current_user_id] = user.id
            redirect_to '/random-question'
        else
            flash[:error_message] = 'Wrong Username or Password'
            redirect_to new_session_url
            # Ooops!
        end
    end

    def define_error_message
        @error_message = flash[:error_message]
    end

end