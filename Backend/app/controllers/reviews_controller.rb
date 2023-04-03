class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :create

    def index
        reviews  = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        
        if review
        render json: review
        else  
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    # Create new review
    def create
        user_movie = Review.create(review_params)
    
        if user_movie.valid?
          render json: user_movie, status: :created
        else
          render json: user_movie.errors, status: :unprocessable_entity
        end
      end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
        
    end
end

    private

    def review_params
        params.permit(:comment, :user_id, :movie_id, :movie)
    end