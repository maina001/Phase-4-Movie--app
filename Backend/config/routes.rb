Rails.application.routes.draw do
  resources :reviews, only: [:create, :destroy]
  resources :movies, only: [:index, :show]
  
  post '/users', to: 'users#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
