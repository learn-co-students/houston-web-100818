class LeashController < ApplicationController

    # Create
    get '/leashes/new' do 
        @dogs = Dog.all
        erb :new_leash
    end

    post '/leashes/' do
        Leash.create(params[:leash])
        redirect "/leashes/"
    end

    # Read 
    get '/leashes/' do  # Lists all leashes
        @leashes = Leash.all
        erb :leashes
    end

    get '/leashes/:id' do # Individual leash
        @leash = Leash.find(params[:id])
        erb :leash
    end

    # Update
    get '/leashes/:id/edit' do 
        @dogs = Dog.all
        @leash = Leash.find(params[:id])
        erb :edit_leash
    end

    patch '/leashes/:id' do
        leash = Leash.find(params[:id])
        leash.update(params[:leash])
        redirect "/leashes/#{leash.id}"
    end

    # Delete

    delete '/leashes/:id' do 
        leash = Leash.find(params[:id])
        leash.destroy
        redirect '/leashes/'
    end

end