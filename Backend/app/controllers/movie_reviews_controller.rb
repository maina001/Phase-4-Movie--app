class MovieReviewsController < ApplicationController

    def index 
        render json: MovieReview.all
    end
end
