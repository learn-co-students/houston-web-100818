class DragonsController < ApplicationController
    
    def new 

    end

    def create
        Dragon.create(dragon_params)
        redirect_to dragons_path
    end

    def index
        @dragons = Dragon.all
    end

    def show
        @dragon = Dragon.find(params[:id])
    end

    def edit
        @dragon = Dragon.find(params[:id])
    end

    def update
        @dragon = Dragon.find(params[:id])
        @dragon.update(dragon_params)
        redirect_to @dragon
    end

    def destroy
        @dragon = Dragon.find(params[:id])
        @dragon.destroy
        redirect_to dragons_path
    end


    def dragon_params
        # Permits, returns the value, and throws an error if its not there
        dragon = params.require(:dragon)
        # Permits, returns the value, but does not throw error
        dragon = params[:dragon]
        dragon.permit(:name, :weight, :height)
    end

end