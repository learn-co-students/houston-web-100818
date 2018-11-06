class DragonsController < ApplicationController

    before_action :define_current_dragon

    def create
        Dragon.create(dragon_params)
        redirect_to dragons_path
    end

    def index
        @dragons = Dragon.all
    end

    def edit 
        @masters = Master.all
    end

    def update
        @dragon.update(dragon_params) # @dragon.update( ability_ids: [1, 2, 3, 4] )
        redirect_to @dragon
    end

    def destroy
        @dragon.destroy
        redirect_to dragons_path
    end


    def define_current_dragon
        if params[:id]
            @dragon = Dragon.find(params[:id])
        else
            @dragon = Dragon.new
        end
    end

    def dragon_params
        # Permits, returns the value, and throws an error if its not there
        dragon = params.require(:dragon)
        # Permits, returns the value, but does not throw error
        dragon = params[:dragon]
        dragon.permit(:name, :weight, :height, :image, :master_id, ability_ids: [])
    end

end