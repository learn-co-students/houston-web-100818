class DragonsController < ApplicationController

    before_action :define_current_dragon

    def create
        @dragon = Dragon.create(dragon_params)
        if @dragon.valid?
            redirect_to dragons_path
        else
            render json: { "message": @dragon.errors.messages }
        end
    end

    def update
        @dragon.update(dragon_params)
        if @dragon.valid?
            redirect_to dragons_path
        else
            render json: { "message": @dragon.errors.messages }
        end
    end


    def index
        @dragons = Dragon.all
    end

    def new 
        @masters = Master.all
    end

    def edit 
        @masters = Master.all
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
        dragon_params = params.require(:dragon).permit(:name, :weight, :height, :image, :master_id, ability_ids: [])
    end

end