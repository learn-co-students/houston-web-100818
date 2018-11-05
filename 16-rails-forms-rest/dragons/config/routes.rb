Rails.application.routes.draw do
  get 'abilities/new'
  get 'abilities/edit'
  get 'abilities/show'
  get 'abilities/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :dragons

  # THE BELOW DOES THE EXACT SAME AS ABOVE

  # # Get the interface to create a resource
  # get '/dragons/new', to: 'dragons#new'

  # # Creates a resource
  # post '/dragons/', to: 'dragons#create'

  # # Lists all the resources
  # get '/dragons/', to: 'dragons#index'

  # # Get the details of one dragon
  # get '/dragons/:id', to: 'dragons#show'

  # # Get the interface to edit a resource
  # get '/dragons/:id/edit', to: 'dragons#edit'

  # # Update a resource
  # patch '/dragons/:id', to: 'dragons#update'

  # # Delete a resource
  # delete '/dragons/:id', to: 'dragons#destroy'

end
