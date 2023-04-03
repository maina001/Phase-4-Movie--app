class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :movie, :comment, :user_id, :movie_id

  belongs_to :user 
  belongs_to :movie
end
