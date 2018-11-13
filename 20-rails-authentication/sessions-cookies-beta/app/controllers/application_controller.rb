class ApplicationController < ActionController::Base

    before_action :define_error_message


    def current_user
        User.find(session[:current_user_id])
    end

    def define_error_message
        @error_message = flash[:error_message]
    end

end
