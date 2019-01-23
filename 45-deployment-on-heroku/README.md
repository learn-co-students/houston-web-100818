# Deployment On Heroku

## Vocabulary

* `npm build`
  * Creates a static build of our front end which can be served from any server
* `heroku create`
  * Creates a heroku remote for your github repository

## Outline

* Introduction

  * Create Heroku Account
  * Install Heroku CLI 
    * https://devcenter.heroku.com/articles/heroku-cli#download-and-install

* Serve our front end from our backend

  * `npm build`

  * Copy it over

  * Serve all other routes to your front end

  ``` ruby
    get '/', to: 'static#index'                              
    get '*other', to: redirect('/') 
  ``` 
  ```ruby
    require 'rails/application_controller'
    class StaticController < Rails::ApplicationController
        def index                                             
            render file: Rails.root.join('public', 'index.html')  
        end                                                   
    end                                                   
 ```
* Add project to GIT

* Create a Remote Repository for Heroku to run our app from

  * `heroku create`

* Push our code to that remote

  * `git push heroku master`
  * Ruby Version Bug
    * Change the Gem file
    * Change the Gem lock
    * Change .ruby-version file