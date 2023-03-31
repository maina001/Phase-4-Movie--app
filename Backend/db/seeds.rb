require 'faker'
puts "Seeding..."
# Generate fake movie data
10.times do
  Movie.create( 
    image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['movie']),
    title: Faker::Movie.title,
    year: Faker::Number.between(from: 2000, to: 2023),
    director: Faker::Name.name,
    genre: Faker::Book.genre
  )
end

# Generate fake review data
10.times do
  Review.create( 
    rating: Faker::Number.between(from: 1, to: 5),
    comment: Faker::Lorem.sentence(word_count: 10),
    user_id: Faker::Number.unique.between(from: 1, to: 100),
    movie_id: Faker::Number.between(from: 1, to: 10)
  )
end

puts "Done seeding"
