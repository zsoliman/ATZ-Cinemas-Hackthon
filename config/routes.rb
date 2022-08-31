Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "theater#index" 
  get "/theater/:id", to: "theater#show"

  
  get '/ticket', to: "ticket#index"
  patch '/ticket/:id', to: "ticket#purchase"
  
 
  get '/seat', to: "seat#index"
  get '/seat/:id', to: "seat#show"
  patch 'seat/:id', to: "seat#update"

end
