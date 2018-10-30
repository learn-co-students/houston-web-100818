class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    @name = 'Michael'

    erb :home
  end
end
