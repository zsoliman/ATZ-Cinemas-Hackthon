# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


t1 = Theater.create(capacity: 20, genre: "Romance")
t2 = Theater.create(capacity: 20, genre: "Comedy")
t3 = Theater.create(capacity: 20, genre: "Action")
t4 = Theater.create(capacity: 20, genre: "Horror")

puts "Actions movies"
#ACTION MOVIES
m1 = Movie.create!(name: "Bullet Train", description: "Five assassins aboard a fast moving bullet train find out their missions have something in common.", rating: "R", runtime: 123, theater_id: 3, release_date: 2022, genres: "action-comdey-thriller")
m2 = Movie.create!(name: "Prey", description: "The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.", rating: "R", runtime: 99, theater_id: 3, release_date: 2022, genres: "action-adventure-drama")
m3 = Movie.create!(name: "Jurassic Park", description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", rating: "PG-13", runtime: 127, theater_id: 3, release_date: 1993, genres: "action-adventure-scifi")
m4 = Movie.create!(name: "Predator", description: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.", rating: "R", runtime: 107, theater_id: 3, release_date: 1987, genres: "action-adventure-horror")
m5 = Movie.create!(name: "Minority Report", description: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.", rating: "PG-13", runtime: 145, theater_id: 3, release_date: 2002, genres: "action-crime-mistery")
m6 = Movie.create!(name: "Matrix", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", rating: "R", runtime: 136, theater_id: 3, release_date: 1999, genres: "action-scifi")
m7 = Movie.create!(name: "The Terminator", description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.", rating: "R", runtime: 147, theater_id: 3, release_date: 1984, genres: "action-scifi")

puts "Romance Movies"
#ROMANCE MOVIES

m8 = Movie.create!(name: "Love & Gelato", description: "Lina makes a promise to her sick mother that she'll spend the summer before college in Rome, where she falls for the city, the people - and the 'gelato'.", rating: "TV-14", runtime: 110, release_date: 2022, genres: "Romance-Comedy-Drama", theater_id: 1)
m9 = Movie.create!(name: "My Fake Boyfriend", description: "In the film, a young man in a tricky situation (Keiynan Lonsdale) follows the advice of his unconventional best friend (Dylan Sprouse) and uses social media to create a fake boyfriend to keep his awful ex-lover out of his life. But everything backfires when he meets the real love of his life, and breaking up with his fake boyfriend proves hard to do.", rating: "R", runtime: 100, release_date: 2022, genres: "Romance-Comedy", theater_id: 1)
m10 = Movie.create!(name: "The Notebook", description: "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.", rating: "PG-13", runtime: 123, release_date: 2004, genres: "Romance-Drama", theater_id: 1)
m11 = Movie.create!(name: "Crazy, Stupid, Love.", description: "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.", rating: "PG-13", runtime: 118, release_date: 2011, genres: "Romance-Drama", theater_id: 1)
m12 = Movie.create!(name: "La La Land", description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.", rating: "PG-13", runtime: 128, release_date: 2016, genres: "Romance-Comedy-Drama-Music", theater_id: 1)
m13 = Movie.create!(name: "Me Before You", description: "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.", rating: "PG-13", runtime: 104, release_date: 2016, genres: "Romance-Drama", theater_id: 1)
m14 = Movie.create!(name: "Enchanted", description: "A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil Queen, where she falls in love with a lawyer.", rating: "PG", runtime: 103, release_date: 2007, genres: "Romance-Drama-Adventure-Animation", theater_id: 1)

puts "Drama movies"
#DRAMA MOVIES

m15 = Movie.create(name: "Meet the Parents",
description: "Male nurse Greg Focker meets his girlfriend's parents before proposing, but her suspicious father is every date's worst nightmare.",
rating: "PG-13",
runtime: 108,
theater_id: 2,
release_date: 2000,
genres: "comedy-romance")
m16 = Movie.create(name: "Mean Girls",
description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
rating: "PG-13",
runtime: 97,
theater_id: 2,
release_date: 2004,
genres: "comedy")
m17 = Movie.create(name: "The Mask",
description: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
rating: "PG-13",
runtime: 101,
theater_id: 2,
release_date: 1994,
genres: "comedy-action-crime"
)
m18 = Movie.create(name: "School of Rock",
description: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.",
rating: 'R',
runtime: 88,
theater_id: 2,
release_date: 2003,
genres: "comedy"
)
m19 = Movie.create(name: "Office Space",
description: "Three company workers who hate their jobs decide to rebel against their greedy boss.",
rating: 'R',
runtime: 89,
theater_id: 2,
release_date: 1999,
genres: "comedy"
)
m20 = Movie.create(name: "Ace Ventura, Pet Detective",
description: "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.",
rating: 'PG-13',
runtime: 86,
theater_id: 2,
release_date: 1994,
genres: 'comedy')
m21 = Movie.create(name: "Wayne's World",
description: "Two slacker friends try to promote their public-access cable show.",
rating: 'PG-13',
runtime: 94,
theater_id: 2,
release_date: 1992,
genres: 'comedy-music'
)

puts "horror movies"
#HORROR

m22 = Movie.create!(name: "It", description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.", rating: "R", runtime: 135, release_date: 2017, genres: "Horror", theater_id: 4)
m23 = Movie.create!(name: "Get Out", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.", rating: "R", runtime: 104, release_date: 2017, genres: "Horror-Mystery-Thriller", theater_id: 4)
m24 = Movie.create!(name: "The Shining", description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", rating: "R", runtime: 146, release_date: 1980, genres: "Horror-Drama", theater_id: 4)
m25 = Movie.create!(name: "A Quiet Place", description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.", rating: "PG-13", runtime: 90, release_date: 2018, genres: "Horror-Drama-Scifi", theater_id: 4)
m26 = Movie.create!(name: "The Conjuring", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", rating: "R", runtime: 112, release_date: 2013, genres: "Horror-Mystery-Thriller", theater_id: 4)
m27 = Movie.create!(name: "Midsommar", description: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.", rating: "R", runtime: 148, release_date: 2019, genres: "Horror-Drama-Mystery", theater_id: 4)
m28 = Movie.create!(name: "The Curse of La Llorona", description: "Ignoring the eerie warning of a troubled mother suspected of child endangerment, a social worker and her own small kids are soon drawn into a frightening supernatural realm.", rating: "R", runtime: 93, release_date: 2019, genres: "Horror-Mystery-Thriller", theater_id: 4)