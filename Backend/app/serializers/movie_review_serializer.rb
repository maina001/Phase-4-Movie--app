class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :movie_id, :review_id
end
