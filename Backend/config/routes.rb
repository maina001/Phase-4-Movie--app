Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # GET route for getting a review by id
get '/reviews/:id', to: 'reviews#show'

# GET route for getting all reviews
get '/reviews', to: 'reviews#index'

# Post route for creating new review
post 'reviews/create', to: 'reviews#create'

# DELETE route for deleting a review by id
delete '/reviews/:id', to: 'reviews#destroy'

# GET route for getting all movies
get '/movies', to: 'movies#index'

# GET route for getting a movie by id
get '/movies/:id', to: 'movies#show'

# Post route for creating a new user
post '/create', to: 'users#create'

# get route for viewing a specific user
get 'show/:id', to: 'users#show'

# Post route for login endpoint
post 'login', to: 'sessions#login'

# Delete route for Logout
delete 'logout', to: 'sessions#destroy'

# Post route for creating a user's vote 
post 'votes/create', to: 'user_movies#create'

get 'votes', to: 'user_movies#index'

get 'votes/:id', to: 'user_movies#show'


# resources :movies, only: [:index, :show]
# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

# Defines the root path route ("/")
# root "articles#index"
end
