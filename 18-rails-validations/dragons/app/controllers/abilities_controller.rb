class AbilitiesController < ApplicationController

    before_action :define_current_ability

    def create
        Ability.create(ability_params)
        redirect_to abilities_path
    end

    def index
        @abilities = Ability.all
    end

    def update
        @ability.update(ability_params)
        redirect_to @ability
    end

    def destroy
        @ability.destroy
        redirect_to abilities_path
    end


    def define_current_ability
        if params[:id]
            @ability = Ability.find(params[:id])
        else
            @ability = Ability.new
        end
    end

    def ability_params
        # Permits, returns the value, and throws an error if its not there
        ability = params.require(:ability)
        # Permits, returns the value, but does not throw error
        ability = params[:ability]
        ability.permit(:name)
    end

end