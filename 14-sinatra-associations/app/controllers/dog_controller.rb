class DogController < ApplicationController

    # Create
    get '/dogs/new' do 
        erb :new_dog
    end

    post '/dogs/' do
        Dog.create(params[:dog])
        redirect "/dogs/"
    end

    # Read 
    get '/dogs/' do  # Lists all dogs
        @dogs = Dog.all
        erb :dogs
    end

    get '/dogs/:id' do # Individual dog
        @dog = Dog.find(params[:id])
        erb :dog
    end

    # Update
    get '/dogs/:id/edit' do 
        @dog = Dog.find(params[:id])
        erb :edit_dog
    end

    patch '/dogs/:id' do
        dog = Dog.find(params[:id])
        dog.update(params[:dog])
        redirect "/dogs/#{dog.id}"
    end

    # Delete

    delete '/dogs/:id' do 
        dog = Dog.find(params[:id])
        dog.destroy
        redirect '/dogs/'
    end

end