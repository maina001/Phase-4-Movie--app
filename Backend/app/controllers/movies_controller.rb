class MoviesController < ApplicationController

    def index
       movie = Movie.all
       render json: movie 
    end

    def show 
        movie = Movie.find_by(id: params[:id])
        if movie
        render json: movie
        else 
            render json: {error: "Movie not found"}, status: 404
        end
    end 

    def create
        movie = Movie.create(user_movie_params)
    
        if user_movie.valid?
          render json: movie, status: :created
        else
          render json: movie.errors, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :email, :year_born, :password)
    end

end
