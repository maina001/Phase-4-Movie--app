class UserMovie < ApplicationRecord
    belongs_to :user
    belongs_to :movie

    validates :movie, presence: true
end
