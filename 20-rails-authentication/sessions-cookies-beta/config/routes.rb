Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :responses
  resources :users
  resources :sessions
  get :'random-question', to: 'responses#new'
  get :'login', to: 'sessions#new'
end
