class MastersController < ApplicationController
  
  before_action :define_current_master

  def create
      Master.create(master_params)
      redirect_to masters_path
  end

  def index
      @masters = Master.all
  end

  def update
      @master.update(master_params)
      redirect_to @master
  end

  def destroy
      @master.destroy
      redirect_to masters_path
  end


  def define_current_master
      if params[:id]
          @master = Master.find(params[:id])
      else
          @master = Master.new
      end
  end

  def master_params
      # Permits, returns the value, and throws an error if its not there
      master = params.require(:master)
      # Permits, returns the value, but does not throw error
      master = params[:master]
      master.permit(:name)
  end


end
