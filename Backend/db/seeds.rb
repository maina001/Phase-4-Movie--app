require 'faker'

puts "Seeding..."

# Generate 20 user records with realistic-looking data
usernames = [
  "coolcat123",
  "moviebuff88",
  "bookworm99",
  "fitnessfanatic",
  "techgeek",
  "traveler101",
  "foodie22",
  "naturelover",
  "fashionista",
  "gamer4life",
  "musiclover",
  "sportsfan",
  "artenthusiast",
  "photographer",
  "historybuff",
  "petlover",
  "beachbum",
  "cityslicker",
  "mountainman",
  "starwarsfan"
]

emails = [
  "coolcat123@example.com",
  "moviebuff88@example.com",
  "bookworm99@example.com",
  "fitnessfanatic@example.com",
  "techgeek@example.com",
  "traveler101@example.com",
  "foodie22@example.com",
  "naturelover@example.com",
  "fashionista@example.com",
  "gamer4life@example.com",
  "musiclover@example.com",
  "sportsfan@example.com",
  "artenthusiast@example.com",
  "photographer@example.com",
  "historybuff@example.com",
  "petlover@example.com",
  "beachbum@example.com",
  "cityslicker@example.com",
  "mountainman@example.com",
  "starwarsfan@example.com"
]

# Generate birth years from 1970 to 2005
birth_years = (1970..2005).to_a

usernames.each do |username|
  email = emails.sample
  year_born = birth_years.sample
  password = "password"
  User.create(username: username, email: email, year_born: year_born, password: password, password_confirmation: password)
end


# Generate movie data
Movie.create(title: "John Wick Chapter", year: 2023, duration: 131, category: "Action")
Movie.create(title: "Shazam!", year: 2023, duration: 132, category: "Action")
Movie.create(title: "Operation Fortune", year: 2023, duration: 118, category: "Action")
Movie.create(title: "Transformers: Rise of the Beast", year: 2023, duration: 127, category: "Science Fiction")
Movie.create(title: "Avatar: The Way of Water", year: 2023, duration: 156, category: "Science Fiction")
Movie.create(title: "Ant-Man", year: 2023, duration: 117, category: "Science Fiction")
Movie.create(title: "Huérfana: The Bone Woman", year: 2023, duration: 96, category: "Horror")
Movie.create(title: "Attachment", year: 2023, duration: 95, category: "Horror")
Movie.create(title: "M3GAN", year: 2023, duration: 100, category: "Horror")
Movie.create(title: "The Flash", year: 2023, duration: 150, category: "Adventure")
Movie.create(title: "Fast X", year: 2023, duration: 135, category: "Adventure")
Movie.create(title: "The Hunger Games", year: 2023, duration: 142, category: "Adventure")


# Create some sample reviews for movies
reviews = [
  { movie: Movie.find_by(title: "John Wick chapter"), comment: "Great action movie!"},
  { movie: Movie.find_by(title: "Shazam!"), comment: "Fun superhero movie for all ages",},
  { movie: Movie.find_by(title: "Operation fortune"), comment: "Good spy thriller with lots of twists"},
  { movie: Movie.find_by(title: "Transformers: Rise of the Beast"), comment: "Awesome special effects, but weak story" },
  { movie: Movie.find_by(title: "Avatar: The way of water"), comment: "Visually stunning, but predictable plot"},
  { movie: Movie.find_by(title: "Ant-man"), comment: "Enjoyable heist movie with a superhero twist"},
  { movie: Movie.find_by(title: "Huesera: The Bone woman"), comment: "Interesting exploration of Mexican folklore"},
  { movie: Movie.find_by(title: "Attatehment"), comment: "Great drama about relationships and infidelity"},
  { movie: Movie.find_by(title: "M3GAN"), comment: "Average sci-fi thriller with a killer robot"},
  { movie: Movie.find_by(title: "The flash"), comment: "Entertaining superhero movie with a great cast"},
  { movie: Movie.find_by(title: "Fast x"), comment: "Action-packed car racing movie with a great soundtrack"},
  { movie: Movie.find_by(title: "The Hunger games"), comment: "Suspenseful and thought-provoking dystopian movie"},
]

# Assign the reviews to random users
User.all.each do |user|
  reviews.sample(4).each do |review|
    user.reviews.create(review)
  end
end



# Seed data for user_movies table


# Create 10 UserMovie records
10.times do
  UserMovie.create(
    rating: Faker::Number.between(from: 1, to: 10),
    user_id: Faker::Number.between(from: 1, to: 12),
    movie_id: Faker::Number.between(from: 1, to: 12)
  )
end


puts "Done seeding"
