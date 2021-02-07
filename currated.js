
$(document).ready(function() {
    
    // Movie array

    let movieArray = [
        {"title": "Get Out", "director": "", "year": 2017, "type": "movie", "mood": "", "desc": "A boy visits his girlfriend\'s house and is lured into an abyss.", "poster": "https://i.pinimg.com/originals/74/cd/60/74cd60386c9adf1d072d52b21dd1a8bf.jpg"},
        {"title": "The Great Beauty", "director": "", "year": 2013, "type": "movie", "mood": "", "desc": "An arrogant high life writer looks for inspiration and reflects on the humbleness of life",  "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_.jpg"},
        {"title": "Inglorious Bastards", "director": "", "year": 2009, "type": "movie", "mood": "", "desc": "Nazi hunters hunt down Nazis in sweet contemporary revenge", "poster": "https://i.redd.it/qbhabe74uko01.jpg"},
        {"title": "Django Unchained", "director": "", "year": 2012, "type": "movie", "mood": "", "desc": "A freed slave hunts down wanted men with a bounty hunter", "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"},
        {"title": "O'Brother Where Art Thou", "director": "Joel Coen", "year": 2000, "type": "movie", "mood": "", "desc": "Three prisoners escape into a series of adventures (with a great American soundtrack)",  "poster": "https://xl.movieposterdb.com/10_02/2000/190590/xl_190590_a18c6222.jpg"},
        {"title": "The Ballad of Buster Scrubs", "director": "Ethan Coen, Joel Coen", "year": 2018, "type": "movie", "mood": "", "desc": "A series of lives and deaths in the wild wild west",  "poster": "https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg"},
        {"title": "Fury", "director": "David Ayer", "year": 2014, "type": "movie", "mood": "", "desc": "An American tank advances into the heart of a bleak 1945 war with everything against them", "poster": "https://xl.movieposterdb.com/14_06/2014/2713180/xl_2713180_ce2c112d.jpg"},
        {"title": "Waltz with Bashir", "director": "Ari Folman", "year": 2008, "type": "movie", "mood": "", "desc": "An Israeli man searches for his lost teenage memories from the 1982 war with Lebanon", "poster": "https://xl.movieposterdb.com/09_03/2008/1185616/xl_1185616_c438fefa.jpg"},
        {"title": "World War Z", "director": "Marc Forster", "year": 2013, "type": "movie", "mood": "", "desc": "An highly transmissible virus overtakes the world and a family must face it while most can only run", "poster": "https://xl.movieposterdb.com/13_03/2013/816711/xl_816711_baab9e72.jpg"},
        {"title": "Mad Max: Fury Road", "director": "", "year": 2015, "type": "movie", "mood": "", "desc": "A woman hightales it out of the desert with enemies in toe and fugitives in boot", "poster": "https://xl.movieposterdb.com/14_07/2015/1392190/xl_1392190_a85dc929.jpg"},
        {"title": "Mean Girls", "director": "", "year": 2004, "type": "movie", "mood": "", "desc": "On Wednesdays, we wear pink", "poster": "https://xl.movieposterdb.com/06_03/2004/0377092/xl_98614_0377092_65ba64e9.jpg"},
        {"title": "Truman Show", "director": "Peter Weir", "year": 1998, "type": "movie", "mood": "", "desc": "All the world is a stage and you're the star", "poster": "https://xl.movieposterdb.com/05_08/1998/0120382/xl_42193_0120382_e8bdaf99.jpg"},
        {"title": "Superbad", "director": "Greg Mottola", "year": 2007, "type": "movie", "mood": "", "desc": "Three high school friends do everything they can do get to the party that'll prepare them for college", "poster": "https://xl.movieposterdb.com/09_04/2007/829482/xl_829482_0e9fbfa6.jpg"},
        {"title": "Project X", "director": "Nima Nourizadeh", "year": 2012, "type": "movie", "mood": "", "desc": "A boy is thrown an eighteenth birthday party unbeknownst to his parents", "poster": "https://xl.movieposterdb.com/12_02/2012/1636826/xl_1636826_b78c4170.jpg"},
        {"title": "Crazy, Stupid, Love", "director": "Glenn Ficarra, John Requa", "year": 2011, "type": "movie", "mood": "", "desc": "The intertwined lives of several romances meet in the most unexpected place", "poster": "https://i.pinimg.com/originals/1f/e9/93/1fe9935848cb1b51cb25cf2cc89bcfc5.jpg"},
        {"title": "The Nice Guys", "director": "Shane Black", "year": 2010, "type": "movie", "mood": "", "desc": "Two detectives, one hired by her and another seeking her, must work together to find her", "poster": "https://i.pinimg.com/564x/f4/de/28/f4de280d536596c86eb32d60b6374168.jpg"},
        {"title": "Ex, Machina", "director": "Alex Garland", "year": 2014, "type": "movie", "mood": "", "desc": "Isn't it strange, to create something that hates you?", "poster": "https://i.pinimg.com/564x/72/bc/1b/72bc1bd429a877b7e0095b082789a5d9.jpg"},
        {"title": "Hereditary", "director": "Ari Aster", "year": 2018, "type": "movie", "mood": "", "desc": "Viewer discretion is advised. If you have a peanut allergy, wear a seatbelt", "poster": "https://i.pinimg.com/564x/4b/00/f1/4b00f1720e42be5fa3784981a223ceb5.jpg"},
        {"title": "10 Cloverfield Lane", "director": "Dan Trachtenberg", "year": 2016, "type": "movie", "mood": "", "desc": "A woman is saved by a man who grows increasingly suspicious", "poster": "https://i.pinimg.com/564x/5f/d7/df/5fd7dffc2755457d4c85df9600218c9b.jpg"},
        {"title": "Annihilation", "director": "Alex Garland", "year": 2018, "type": "movie", "mood": "", "desc": "A mysterious alien substance falls on earth, a group of scientists venture into its midst", "poster": "https://i.pinimg.com/564x/59/a1/a4/59a1a4e22ab2fb7ebfa24fd0b7cf7bcd.jpg"},
        {"title": "Snowpiercer", "director": "Bong Joon-ho", "year": 2013, "type": "movie", "mood": "", "desc": "The tail wants to move to the top.", "poster": "https://i.pinimg.com/564x/4f/80/c3/4f80c3c2f49123d0f58589adfb230bef.jpg"},
        {"title": "Les Intouchables", "director": "Olivier Nakache, Eric Toledano", "year": 2011, "type": "movie", "mood": "", "desc": "To be seen without pity", "poster": "https://xl.movieposterdb.com/11_09/2011/1675434/xl_1675434_ed83c3e7.jpg"},
        {"title": "Dead Poet’s Society", "director": "Peter Weir", "year": 1989, "type": "movie", "mood": "", "desc": "Seize the day, and other things, a perfect tribute to Robin W.", "poster": "https://i.pinimg.com/564x/8c/fe/df/8cfedf3cda31f9e9c5f01bc06e044fc7.jpg"},
        {"title": "Another Earth", "director": "Mike Cahill", "year": 2011, "type": "movie", "mood": "", "desc": "She was born in West Haven, Connecticut and wanted to phone another home", "poster": "https://xl.movieposterdb.com/11_09/2011/1549572/xl_1549572_d612d5be.jpg"},
        {"title": "Dunkirk", "director": "Christopher Nolan", "year": 2017, "type": "movie", "mood": "", "desc": "As though entering into the vision field of battle (most effective when seen on the big screen)", "poster": "https://xl.movieposterdb.com/20_07/2017/5013056/xl_5013056_01361c36.jpg"},
        {"title": "Hurt Locker", "director": "Kathryn Bigelow", "year": 2009, "type": "movie", "mood": "", "desc": "Amidst the ticking of a time bomb", "poster": "https://i.pinimg.com/564x/75/5c/f6/755cf6bafe3a5ba577b0522754a25fd7.jpg"},
        {"title": "Spirited Away", "director": "Hayao Miyazaki", "year": 2001, "type": "movie", "mood": "", "desc": "A girl must work at a bathhouse catered to spirits to save the human lives of her parents", "poster": "https://i.pinimg.com/564x/b7/b9/65/b7b9652068503773f52e903541433fde.jpg"},
        {"title": "Castle in the Sky", "director": "Hayao Miyazaki", "year": 1986, "type": "movie", "mood": "", "desc": "A boy and a girl search to discover the truth behind a legend.", "poster": "https://i.pinimg.com/564x/94/0a/76/940a763f61c5541a2b11edfcc64d0bea.jpg"},
        {"title": "Ghost in the Shell ", "director": "Mamoru Oshii", "year": 1995, "type": "movie", "mood": "", "desc": "And can you offer me proof of your existence?", "poster": "https://xl.movieposterdb.com/05_11/1995/0113568/xl_63110_0113568_6ee41d17.jpg"},
        {"title": "Ratatouille", "director": "Brad Bird", "year": 2007, "type": "movie", "mood": "", "desc": "A rat you'd love to eat... with", "poster": "https://xl.movieposterdb.com/09_04/2007/382932/xl_382932_81cf1703.jpg"},
        {"title": "Skins Rise", "director": "Jack Clough", "year": 2020, "type": "tv", "mood": "", "desc": "Skin's final season stands in stark contrast with the rest of the teenage drama (if any, watch Rise)", "poster": "https://i.imgur.com/oxf0TIF.jpg"},
        {"title": "Spirit", "director": "Kelly Asbury, Lorna Cook", "year": 2002, "type": "movie", "mood": "", "desc": "A horse and a Native American cunningly escape from their captors.", "poster": "https://i.pinimg.com/564x/d8/26/81/d826819db77fd43c2b3b84f373757354.jpg"},
        {"title": "Coherence", "director": "James Ward Byrkit", "year": 2017, "type": "movie", "mood": "", "desc": "The box has opened, and the cat is both dead and alive.", "poster": "https://xl.movieposterdb.com/14_06/2013/2866360/xl_2866360_f3e419f3.jpg"},
        {"title": "Mid 90’s", "director": "Jonah Hill", "year": 2018, "type": "movie", "mood": "", "desc": "A young boy befriends a group of skaters, learns life lessons", "poster": "https://i.pinimg.com/564x/52/95/d0/5295d0e64ec7d1b00bd1e2beefdff43c.jpg"},
        {"title": "Eighth Grade", "director": "Bo Burnham", "year": 2018, "type": "movie", "mood": "", "desc": "Always remember to be. yourself. Gucci", "poster": "https://i.pinimg.com/564x/ef/5a/cb/ef5acbd6c9118b88f2aee2485ee36570.jpg"},
        {"title": "The Edge of Seventeen", "director": "Kelly Fremon Craig", "year": 2016, "type": "movie", "mood": "", "desc": "A girl losers her friend to her brother in a coming of age", "poster": "https://i.pinimg.com/564x/44/22/11/44221196bb0a3ba4c7a6aa9e8d040084.jpg"},
        {"title": "Yesterday", "director": "Danny Boyle", "year": 2019, "type": "movie", "mood": "", "desc": "A struggling musician wakes in a world where the Beatles never existed. Guess what he does next?", "poster": "https://i.pinimg.com/564x/b0/88/1c/b0881c2ea4b1a1393c931ac99c9eec18.jpg"},
        {"title": "Black Swan", "director": "Darren Aronofsky", "year": 2010, "type": "movie", "mood": "", "desc": "A ballerina slips into madness", "poster": "https://xl.movieposterdb.com/10_12/2010/947798/xl_947798_aaf59afc.jpg"},
        {"title": "Titanic", "director": "James Cameron", "year": 1997, "type": "movie", "mood": "", "desc": "Watch out, big iceberg. You jump I jump, Jack", "poster": "https://i.pinimg.com/564x/25/65/dc/2565dcb8ba64e9dc99561cd8bb07782e.jpg"},
        {"title": "Looper", "director": "Rian Johnson", "year": 2012, "type": "movie", "mood": "", "desc": "A hitman kills unwanted men from the future, until he's faced with his future self.", "poster": "https://i.pinimg.com/564x/39/c6/f2/39c6f26d5628adfbdc011f426d08ccbc.jpg"},
        {"title": "Amelie", "director": "Jean-Pierre Jeunet", "year": 2002, "type": "movie", "mood": "", "desc": "A person can make the world a magical place", "poster": "https://xl.movieposterdb.com/05_02/2001/0211915/xl_6309_0211915_a7274584.jpg"},
        {"title": "The King", "director": "David Michod", "year": 2019, "type": "movie", "mood": "", "desc": "Only those who do not seek power are qualified to hold it", "poster": "https://i.pinimg.com/564x/cc/d6/b5/ccd6b5e239ae9af6532430bbaf6531ed.jpg"},
        {"title": "Call Me By Your Name", "director": "Luca Guadagnino", "year": 2018, "type": "movie", "mood": "", "desc": "Quaint Italian town, taste of forbidden love", "poster": "https://i.pinimg.com/564x/e5/f1/fe/e5f1fe9f5457b0dafa9f1b71b0348d48.jpg"},
        {"title": "Extremely Wicked Shocking Evil and Vile", "director": "Joe Berlinger", "year": 2019, "type": "movie", "mood": "", "desc": "From the perspective of the woman who loved the killer, who killed the women", "poster": "https://i.pinimg.com/564x/c0/3d/6e/c03d6edfe09fcb53bbf332034dc0081a.jpg"},
        {"title": "Mignonnes", "director": "Maimouna Doucore", "year": 2020, "type": "movie", "mood": "", "desc": "Through trial and several errors, the development of identity", "poster": "https://i.pinimg.com/564x/17/6e/9a/176e9a8e4fa3721a153a50fe783c7be2.jpg"},
        {"title": "Queens Gambit", "director": "", "year": 2017, "type": "movie", "mood": "", "desc": "Don't play with her", "poster": "https://i.pinimg.com/564x/b4/81/e4/b481e4649fcda820f74caa06311c0eca.jpg"},
        {"title": "Peaky Blinders", "director": "Steven Knight, David Caffrey, Tim Mielants", "year": 2013, "type": "movie", "mood": "", "desc": "A family of bookies fight for money, power, status", "poster": "https://i.pinimg.com/564x/85/d9/1d/85d91dff925897f3380d734e416aa463.jpg"},
        {"title": "Blackkklansman", "director": "Spike Lee", "year": 2018, "type": "movie", "mood": "", "desc": "Oh brother, who art thou?", "poster": "https://i.pinimg.com/564x/69/d2/4a/69d24a4223db134622d7d3571d2156d3.jpg"},
        {"title": "Giri/Haji", "director": "Julian Farino Ben Chessell", "year": 2020, "type": "movie", "mood": "", "desc": "Police forces cross in an international gang war, ft. two sets of subtitles in one movie", "poster": "https://i.pinimg.com/564x/8b/b8/1b/8bb81b83f9cb1a469d27a3332de9541a.jpg"},
        {"title": "Outlander", "director": "Anna Foerster", "year": 2017, "type": "movie", "mood": "", "desc": "A love story between two people born 200 years apart", "poster": "https://i.pinimg.com/564x/95/5d/df/955ddf6d7468b20e4ab78c927d81986f.jpg"},
        {"title": "Train to Busan", "director": "Yeon Sang-ho", "year": 2016, "type": "movie", "mood": "", "desc": "Zombie apocolypse meets Pelham 123, but creepier", "poster": "https://i.pinimg.com/564x/90/ef/3a/90ef3a3365c89b0034f3c8ae93c83431.jpg"},
        {"title": "Casa de Papel", "director": "Álex Pina", "year": 2017, "type": "movie", "mood": "", "desc": "An international heist, gotta love the bad guys", "poster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9Fw-xje4MUvME1Nb5u1RdRmlqJxNe845x0NfF8QQO618gBjcp"},
        {"title": "Cosmos", "director": "Neil deGrasse Tyson", "year": 2014, "type": "movie", "mood": "", "desc": "Like the Twilight Zone, but in our dimension", "poster": "https://m.media-amazon.com/images/M/MV5BMjE4YjZkNWUtOWFkZi00YTE5LTk0M2UtYWU4N2ViZjg4ZDE4XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg"},
        {"title": "Shrek", "director": "Adam Adamson, Vicky Jensen", "year": 2001, "type": "movie", "mood": "", "desc": "Big green man and donkie win your heart, just play da movie ya", "poster": "https://i.pinimg.com/564x/82/58/d5/8258d5d80e06df3581b603530e17e7de.jpg"},
        {"title": "Rick and Morty", "director": "Justin Roiland, Dan Harmon", "year": 2013, "type": "movie", "mood": "", "desc": "Explore the multi-verse and get rickety wrecked", "poster": "https://i.pinimg.com/564x/55/20/94/5520948e7b480c015ee4461af969e25a.jpg"},
        {"title": "Twilight Zone", "director": "Rod Sterling", "year": 1959, "type": "movie", "mood": "", "desc": "You're entering into another time and space, this TV show cannot be replaced. Thank you Rod Sterling ", "poster": "https://i.pinimg.com/564x/d1/34/45/d13445b1905d67a6ff021752f93276db.jpg"},
        {"title": "Breaking Bad", "director": "Vince Gilligan", "year": 2008, "type": "movie", "mood": "", "desc": "Fuck you, and your eyebrows, bitch", "poster": "https://xl.movieposterdb.com/12_08/2008/903747/xl_903747_c544a986.jpg"},
        {"title": "Downtown Abbey", "director": "Julian Fellowes", "year": 2010, "type": "movie", "mood": "", "desc": "Like opening a dollhouse and seeing into every room. An Aristocratic household in time", "poster": "https://xl.movieposterdb.com/13_03/2010/1606375/xl_1606375_169a83a0.jpg"},
        {"title": "Back to the Future", "director": "Robert Zemeckis", "year": 1985, "type": "movie", "mood": "adventurous", "desc": "Traveling back in time only to accidently make it so that your parents never meet... Time is ticking", "poster": "https://xl.movieposterdb.com/09_09/1985/88763/xl_88763_325ddcc9.jpg"},
        {"title": "Bodyguard", "director": "Jed Mercurio", "year": 2018, "type": "movie", "mood": "", "desc": "A man trained to protect the Prime Minister, is framed as the villain", "poster": "https://i.pinimg.com/474x/f7/62/3d/f7623d2950a8a54357336cd33e7889f6.jpg"},
        {"title": "Slumdog Millionaire", "director": "Danny Boyle", "year": 2008, "type": "movie", "mood": "", "desc": "A boy wins a million dollars on TV and is forced to prove his victory by recounting the events that led him to his answers", "poster": "https://i.pinimg.com/564x/9c/87/16/9c87162a635ce5d194bc011c5659751a.jpg"},
        {"title": "Deathnote", "director": "Tetsurō Araki", "year": 2006, "type": "movie", "mood": "", "desc": "A fight of reason and strategy between the good and the bad, a boy with immense power doesn't know which side he's on", "poster": "https://i.pinimg.com/564x/b1/8e/b1/b18eb104400d8b69fd9ec70ff4728ce6.jpg"},
        {"title": "Victoria", "director": "Sebastian Schipper", "year": 2015, "type": "movie", "mood": "", "desc": "Spiriling into a Berlin night for 2.5 hours straight", "poster": "https://i.pinimg.com/564x/44/d3/ed/44d3edb1610b718464b88cc9c8ed192d.jpg"},
        {"title": "Stand By Me", "director": "Rob Reiner", "year": 1986, "type": "movie", "mood": "", "desc": "To be young in life, and to learn of the proximity of death", "poster": "https://i.pinimg.com/564x/50/c8/72/50c87242b14442cfe485cc6faa07ac74.jpg"},
        {"title": "Rear Window", "director": "Alfred Hitchcock", "year": 1954, "type": "movie", "mood": "", "desc": "I spy with my little eye, a thing I am not supposed to see", "poster": "https://i.pinimg.com/564x/cf/62/d7/cf62d704d73737cd64a1d7fd293a6b61.jpg"},
        {"title": "His House", "director": "Remi Weekes", "year": 2020, "type": "movie", "mood": "", "desc": "A family from South Sudan take refuge in an English home and must come to terms with that from which they run", "poster": "https://i.pinimg.com/564x/b8/14/c4/b814c4647dce2cb6873091ec95dc8e42.jpg"},
        {"title": "Relic", "director": "Natalie Erika James", "year": 2020, "type": "movie", "mood": "", "desc": "A grandmother, a mother, a daughter and a house with infinite corridors", "poster": "https://i.pinimg.com/564x/c3/a6/03/c3a603fa9c237a7966268921ce5a7756.jpg"},
        {"title": "Buried", "director": "Rodrigo Cortes", "year": 2010, "type": "movie", "mood": "", "desc": "A man wakes up in a coffin buried deep below the earth", "poster": "https://i.pinimg.com/564x/e0/21/6c/e0216c113f5a9272ee2cb7573e871197.jpg"},
        {"title": "Bronx Tale", "director": "Robert De Niro", "year": 1993, "type": "movie", "mood": "", "desc": "De Niro in one of his first mob tales, this time against the mob, shocking", "poster": "https://i.pinimg.com/564x/cf/9f/02/cf9f02de0d9ca5a466c40047f0602166.jpg"},
        {"title": "Ladybird", "director": "Greta Gerwig", "year": 2017, "type": "movie", "mood": "", "desc": "My given name is given to me by me", "poster": "https://i.pinimg.com/564x/93/75/8a/93758acf87a6111ace683641630f793c.jpg"},
        {"title": "Russian Doll", "director": "Leslye Headland", "year": 2019, "type": "movie", "mood": "", "desc": "Living your last day in a loop", "poster": "https://i.pinimg.com/564x/f2/6d/7e/f26d7e81c6b63ef8fe32267a9d4ba1e8.jpg"},
        {"title": "Hunter Hunter", "director": "Shawn Linden", "year": 2020, "type": "movie", "mood": "", "desc": "Havoc wreaks when a man leaves his family alone to search for a monster", "poster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF57HQf8PSK5Z9gGcvHjqTdDLbNjCsDErT5dxyXwIuXyiKRcW_"},
        {"title": "Pulp Fiction", "director": "Quentin Tarantino", "year": 1994, "mood": "", "desc": "Zed's dead, baby. Zed's dead.", "poster": "https://i.pinimg.com/564x/bc/91/7b/bc917bae8141184aaee4cfbc7e4e6f86.jpg"},
        {"title": "Home Alone", "director": "Chris Columbus", "year": 1990, "mood": "", "desc": "It's christmas time, it's hectic, and a kid is left behind", "poster": "https://i.pinimg.com/564x/f7/70/d6/f770d6b297c92d2a8de5a28922e42d80.jpg"},
        {"title": "Rain Man", "director": "Barry Levinson", "year": 1988, "mood": "", "desc": "A brother uses another to gain bucks", "poster": "https://i.pinimg.com/564x/58/70/4d/58704d2ee2ce2ccdc44823564b0a46cc.jpg"},
        {"title": "The Shining", "director": "Stanley Kubrick", "year": 1980, "mood": "", "desc": "Jonny's dad goes crazy and wants to kill him and his mom", "poster": "https://i.pinimg.com/564x/4b/71/0f/4b710fd573e11c092d2761d2a4c168ce.jpg"},
        {"title": "American Beauty", "director": "Sam Mendes", "year": 1999, "mood": "", "desc": "The American dream isn't so dreamy after all", "poster": "https://i.pinimg.com/564x/9f/32/f6/9f32f656584c9155ec4f5e4132ca4044.jpg"},
        {"title": "Avatar", "director": "James Cameron", "year": 2009, "mood": "", "desc": "The blue guys, not the airbenders", "poster": "https://i.pinimg.com/564x/a9/9b/86/a99b866eda83ea6617e9aeffac602475.jpg"},
        {"title": "Nightcrawler", "director": "Dan Gilroy", "year": 2014, "mood": "", "desc": "The lengths we go when we're desperate for a job with no soul", "poster": "https://i.pinimg.com/564x/ba/81/69/ba81691154a19a307bdb560b3f1597e2.jpg"},
        {"title": "Journey to the Centre of the Earth", "director": "Henry Levin", "year": 1959, "mood": "", "desc": "An unlikely bunch going on an extraordinary expedition", "poster": "https://i.pinimg.com/474x/74/ae/93/74ae93b7435de72776cf388192a8544a.jpg"},
        {"title": "Blair Witch Project", "director": "Eduardo Sánchez, Daniel Myrick", "year": 1999, "mood": "", "desc": "You'll never want to go camping again", "poster": "https://i.pinimg.com/564x/ff/ce/7a/ffce7a278836682a546bbca4f8809e89.jpg"},
        {"title": "28 Days Later", "director": "Danny Boyle", "year": 2002, "mood": "", "desc": "Great zombie movie", "poster": "https://i.pinimg.com/564x/5f/77/85/5f778582c14aa09fbe5d3fb1f7e0263d.jpg"},
        {"title": "Schindlers List ", "director": "Steven Spielberg", "year": 1993, "mood": "", "desc": "Those who were saved, but not the girl in the red dress.", "poster": "https://i.pinimg.com/564x/8a/18/3a/8a183a439640961eb65612a1e6bc18fb.jpg"},
        {"title": "The Beguiled", "director": "Sofia Coppola", "year": 2017, "mood": "", "desc": "A group of girls nurse a enemy soldier back to health, until they must turn on him", "poster": "https://i.pinimg.com/564x/f4/e9/87/f4e987fd70a08c9108858cb058d61c05.jpg"},
        {"title": "The Orphenage", "director": "J. A. Bayona", "year": 2007, "mood": "", "desc": "A woman returning to the place she grew discovers secrets she never knew", "poster": "https://i.pinimg.com/564x/5a/88/57/5a8857171c8b84ad7c96bbfb81ee4167.jpg"},
        {"title": "Jackie Brown", "director": "Quentin Tarantino", "year": 1998, "mood": "", "desc": "A flight attendant caught between the crossroad of decision", "poster": "https://i.pinimg.com/474x/70/9b/d3/709bd3cd011a1741c8d8a50a83f2852e.jpg"},
        {"title": "Pretty Woman", "director": "Garry Marshall", "year": 1990, "mood": "", "desc": "Discovering a gem", "poster": "https://i.pinimg.com/564x/df/f4/38/dff438aa27eca9fc7c0fc0433cb62de8.jpg"},
        {"title": "Lion", "director": "Garth Davis", "year": 2017, "mood": "", "desc": "A boy finds himself far away from home on a journey he didn't mean to take", "poster": "https://i.pinimg.com/564x/a5/98/e6/a598e63f646ff505c66119c089de32d6.jpg"},
        {"title": "Life of Pi", "director": "Ang Lee", "year": 2012, "mood": "", "desc": "The things you do to save your skin", "poster": "https://i.pinimg.com/564x/b2/38/e7/b238e7ab8182e8fb78af42953755cd9d.jpg"},
        {"title": "Interstellar", "director": "Christopher Nolan", "year": 2014, "mood": "", "desc": "A story about life, love, humanity, space, time, and not enough of it", "poster": "https://i.pinimg.com/564x/0b/9a/7a/0b9a7a677aaf10e3179fdac1436edd65.jpg"},
        {"title": "Distrikt 9 ", "director": "Neill Blomkamp", "year": 2009, "mood": "", "desc": "A commentary on true events having taken place during the apartheid", "poster": "https://i.pinimg.com/564x/25/92/09/2592099f5883789cd74eb13063da9060.jpg"},
        {"title": "Strangers on a Train", "director": "Alfred Hitchcock", "year": 1951, "mood": "", "desc": "Two strangers, who both want someone dead, meet on a train, and plot to do each other's bidding", "poster": "https://i.pinimg.com/474x/ad/54/6a/ad546ab1d6baaa32d23c595afdbcf7aa.jpg"},
        {"title": "Goodfellas", "director": "Martin Scorsese", "year": 1990, "mood": "", "desc": "Never rat on your friends, and always keep your mouth shut", "poster": "https://i.pinimg.com/564x/89/4e/3c/894e3c912024c6f6a22ab6d28681a630.jpg"},
        {"title": "The Great Escape", "director": "John Sturges", "year": 1963, "mood": "", "desc": "The most cunning prison escape ever hands down team effort all the way", "poster": "https://i.pinimg.com/564x/38/a4/65/38a465c40602d166bc2219a2ff81c2bc.jpg"},
        {"title": "Oldboy", "director": "Park Chan-wook", "year": 2003, "mood": "", "desc": "A man imprisoned for 15 years is finally freed only to voluntarily walk into a nightmare", "poster": "https://i.pinimg.com/564x/6d/fd/24/6dfd24c2d677c3dbe1ef83416bee81ff.jpg"},
        {"title": "Midnight in Paris", "director": "Woody Allen", "year": 2011, "mood": "", "desc": "I can never decide whether Paris is more beautiful by day or by night.", "poster": "https://xl.movieposterdb.com/11_04/2011/1605783/xl_1605783_1672137b.jpg"},
        {"title": "The Undoing", "director": "Susanne Bier", "year": 2020, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/58/4f/0a/584f0a5d2a2f7b18dbfebc3b305a63a6.jpg"},
        {"title": "Rec", "director": "Jaume Balagueró, Paco Plaza", "year": 2007, "mood": "", "desc": "Everyone presumes they know their own family, but I can assure that’s not the case", "poster": "https://i.pinimg.com/564x/ab/1c/c7/ab1cc70323c446e320e1f212e7a269b4.jpg"},
        {"title": "Booksmart", "director": "Olivia Wilde", "year": 2019, "mood": "", "desc": "Good girls tryna be bad", "poster": "https://i.pinimg.com/474x/39/e0/f0/39e0f0a20d54e14b7016bbd2fef5b5e7.jpg"},
        {"title": "The Host", "director": "Bong Joon-ho", "year": 2006, "mood": "", "desc": "This monster movie is a monster movie comeback", "poster": "https://xl.movieposterdb.com/06_10/2006/0468492/xl_137530_0468492_ae8cf565.jpg"},
        {"title": "The Danish Girl", "director": "Tom Hooper", "year": 2015, "mood": "", "desc": "I've only liked a handful of people in my life, and you've been two of them.", "poster": "https://i.pinimg.com/564x/6f/d3/e7/6fd3e7a0e346901ac35850e31c6286e2.jpg"},
        {"title": "The Trial of the Chicago 7", "director": "Aaron Sorkin", "year": 2020, "mood": "", "desc": "Give You Me A Moment, Would You, Friend? I’ve Never Been On Trial For My Thoughts Before", "poster": "https://i.pinimg.com/564x/9c/ac/c6/9cacc64c18f5827c1859092227d61a0a.jpg"},
        {"title": "Under the Shadow", "director": "Babak Anvari", "year": 2016, "mood": "", "desc": "A woman and daughter decide to stay put as evil creeps through the cracks of the bombed city", "poster": "https://i.pinimg.com/564x/82/96/1e/82961ef56e8d118192a44a9f442045c5.jpg"},
        {"title": "1917", "director": "Sam Mendes", "year": 2019, "mood": "", "desc": "Will you write to my mom for me? Tell her I wasn’t scared", "poster": "https://i.pinimg.com/474x/21/7c/1a/217c1aa45927e096dcbfa64607748118.jpg"},
        {"title": "Bombshell", "director": "Jay Roach", "year": 2019, "mood": "", "desc": "If we work hard enough, you might be lucky enough to watch the most powerful man in TV go after you with all he’s got", "poster": "https://i.pinimg.com/564x/c4/40/28/c44028ada592ee17a40cb2e3e8cdde46.jpg"},
        {"title": "Zero Dark Thirty", "director": "Kathryn Bigelow", "year": 2012, "mood": "", "desc": "The capture of Bin Laden", "poster": "https://xl.movieposterdb.com/13_01/2012/1790885/xl_1790885_76d6a827.jpg"},
        {"title": "The Taking of Pelham 123", "director": "Tony Scott", "year": 2009, "mood": "", "desc": "I want you to tell me, what is the going rate for a New York City hostage today?", "poster": "https://i.pinimg.com/564x/04/f3/b7/04f3b790e8cc6a3d481878ad37963a0f.jpg"},
        {"title": "The Servant", "director": "Tony Basgallop", "year": 2019, "mood": "", "desc": "A woman who cannot come to terms with her loss choses to believe what cannot be", "poster": "https://i.pinimg.com/564x/00/b1/10/00b11031e1b0f8a76221d955bf4992f7.jpg"},
        {"title": "A Simple Favor", "director": "Paul Feig", "year": 2018, "mood": "", "desc": "Everyone has a dark side", "poster": "https://i.pinimg.com/564x/ea/d8/c4/ead8c4adb6736c60a234515240516650.jpg"},
        {"title": "Uncut Gems", "director": "Josh Safdie, Benny Safdie", "year": 2019, "mood": "", "desc": "And who is this guy? It’s The Weeknd. What the fuck is The Weeknd?", "poster": "https://i.pinimg.com/564x/0e/84/e6/0e84e6001afe5d794b5c50d1c0afec42.jpg"},
        {"title": "JoJo Rabbit", "director": "Taika Waititi", "year": 2019, "mood": "", "desc": "We're Like You, But Human", "poster": "https://i.pinimg.com/564x/90/2e/62/902e6270e47e27b6c0554b9b719a2971.jpg"},
        {"title": "Game Night", "director": "John Francis Daley, Jonathan Goldstein", "year": 2018, "mood": "", "desc": "A game within a game within a game", "poster": "https://i.pinimg.com/564x/d3/4a/88/d34a88d03677005466bb1f715df169f5.jpg"},
        {"title": "School of Rock", "director": "Richard Linklater", "year": 2003, "mood": "", "desc": "A burnt out rocker acts as a substitute and brings a whole new kind of class", "poster": "https://i.pinimg.com/564x/ed/28/ce/ed28cefbdfe5598b648bc56cb475c6b1.jpg"},
        {"title": "The White Tiger", "director": "Ramin Bahrani", "year": 2021, "mood": "", "desc": "You were looking for the key for years, but the door was always open.", "poster": "https://m.media-amazon.com/images/M/MV5BMDVkMDRkMzItN2EyYS00ZTI5LTljYzgtNzRmZDQ0OTQ3M2VjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"},

        {"title": "Fantastic Mr Fox", "director": "Wes Anderson", "year": 2009, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/71/0f/ee/710fee825456e4504517693ad2ffce61.jpg"},
        {"title": "Castello Cavalcanti", "director": "Wes Anderson", "year": 2013, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/bf/47/da/bf47da964e7dece0c56dffe41c79e508.jpg"},
        {"title": "Lighthouse", "director": "Robert Eggers", "year": 2019, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/e6/75/ce/e675ced7fb7cbadc8be0e645bed72655.jpg"},
        {"title": "10 Things I Hate About You ", "director": "Gil Junger", "year": 1999, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/6d/43/86/6d4386d74c9f09e844ba45e78c6b22dc.jpg"},
        {"title": "Dazed and Confused", "director": "Richard Linklater", "year": 1993, "mood": "", "desc": "", "poster": "https://i.pinimg.com/564x/af/0a/b7/af0ab7d53ffa660cdac6315fdeeba68b.jpg"},
    ];
    
    // let shuffledMovieArray = shuffle;
    let movieArrayCopy = [];
    let tempMovieArray = [];

    function populateMovieColumns(restart) {

        let moviesLoaded = 0;

        if (restart == true) {
            moviesLoaded = 0;
            tempMovieArray.length = 0;
            movieArrayCopy = movieArray.concat();

            // Fisher-Yates shuffle    
            let m = movieArrayCopy.length, t, i;

            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = movieArrayCopy[m];
                movieArrayCopy[m] = movieArrayCopy[i];
                movieArrayCopy[i] = t;
            }

            tempMovieArray = movieArrayCopy;

        } 

        for (let movieColumns = 1; movieColumns <= 3; movieColumns++)  {
            for (let movieLength = 1; movieLength <= 5; movieLength ++ ) {
                let movieTitleLowercase = tempMovieArray[0]['title'].charAt(0).toLowerCase() + tempMovieArray[0]['title'].slice(1);
                let id = movieTitleLowercase.replace(/[.,\/#!$%'\^&\*;:{} =\-_`~()]/g,"")
                $('.movieList'+movieColumns).append("<div class='movieCard'><div><span id='"+id+"Blurb' class='blurb'>"+ tempMovieArray[0]['desc'] +"</span></div><img id='"+ id +"' class='clickable moviePoster' src='"+ tempMovieArray[0]['poster'] +"'><div></div></div>");
                tempMovieArray.shift();
                moviesLoaded++;
            }
        }

        if (moviesLoaded = 15) {
            $('#movie-container').removeClass('hidden');
        }

        posterInteraction();
    }

    function increaseMovieColumns() {
        let moviesLoaded = 0;
        for (let movieColumns = 1; movieColumns <= 3; movieColumns++)  {
            for (let movieLength = 1; movieLength <= 5; movieLength ++ ) {
                let movieTitleLowercase = tempMovieArray[0]['title'].charAt(0).toLowerCase() + tempMovieArray[0]['title'].slice(1);
                let id = movieTitleLowercase.replace(/[.,\/#!$%'\^&\*;:{} =\-_`~()]/g,"")
                $('.movieList'+movieColumns).append("<div class='movieCard'><div><span id='"+id+"Blurb' class='blurb'>"+ tempMovieArray[0]['desc'] +"</span></div><img id='"+ id +"' class='clickable moviePoster' src='"+ tempMovieArray[0]['poster'] +"'><div></div></div>");
                tempMovieArray.shift();
                moviesLoaded++;
            }
        }
        if (moviesLoaded = 15) {
            $('#movie-container').removeClass('hidden');
        }

        posterInteraction();
    }

    populateMovieColumns(true);

    $('#pagination').click(() => {
        increaseMovieColumns();
    })

    $('#theatermasks').click(function() {
        $('#random-movie-container').empty();

        if (!$('#movie-container').hasClass('hidden')) {
            $('.movieList').empty();
            $('#pagination').removeClass('hidden')
            populateMovieColumns(true);
        }

        $('#movie-container').removeClass('hidden');
    })

    let randomId = ''

    // Random movie generator 
    $('#dice').click(function() {
        $('#dice').addClass('shake');
        setTimeout(function() { 
            $('#dice').removeClass('shake');
            $('#random-movie-container').empty();
            let randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
            let movieTitleLowercase = randomMovie['title'].charAt(0).toLowerCase() + randomMovie['title'].slice(1);
            randomId = movieTitleLowercase.replace(/[.,\/#!$%'\^&\*;:{} =\-_`~()]/g,"")
            $('#movie-container').addClass('hidden');
            $('#pagination').addClass("hidden");
            $('#random-movie-container').append("<div class='movieCard'><div><span id='"+randomId+"Blurb' class='blurb'>"+ randomMovie['desc'] +"</span></div><img id='"+ randomId +"' class='clickable moviePoster' src='"+ randomMovie['poster'] +"'><div></div></div>");

            posterInteraction();

        }, 1000);
    })

    if (randomId !== '') {
        $('#'+randomId).hover(function() {
            console.log("hello")
            $('#'+randomId).toggleClass('blurred');
            $('#'+randomId+"Blurb").toggleClass('visible')
        })
    }

    // Interacting with movie cards 
    function posterInteraction() {
        $('.clickable').hover(function() {
            let id = $(this).attr('id');
            $('#'+id).toggleClass('blurred');
            $('#'+id+"Blurb").toggleClass('visible')
        })
        $('.clickable').dblclick(function() {
            let id = $(this).attr('id');
            let src = $('#'+id).attr('src');
    
            // Get movie title via src 
            movieArray.forEach(movie => {
                if (movie['poster'] == src) {
                    window.open('https://www.google.com/search?q='+movie['title']+'', '_blank');
                }
            });
        })
    }

    // Color index 
    $('#crystal').hover(function() {
        $('.movie-list-and-pagination').addClass('shiftRight');
        $('.movie-list-and-pagination').removeClass('shiftLeft');
        // $('#colorIndex').removeClass('hidden');
    }, function() {
        $('.movie-list-and-pagination').addClass('shiftLeft');
        $('.movie-list-and-pagination').removeClass('shiftRight');
        // $('#colorIndex').addClass('hidden');
    })

    // LED Marquee 

    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 0_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 1_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 2_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 3_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 4_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 5_'+i+'"></div>')
    }
    for (let i = 0; i < 100; i++) {
        $('#theMarquee').append('<div class="light off 6_'+i+'"></div>')
    }

    let scroller_length = 100;
    let height = 7;
    let fps = 70;
    let message = textToLED('New Movie: Under the shadow');
    let leftPointer = scroller_length + 1;
    let furthestLeftPoint = 0 - message.length;

    // Changes the color of the lights if there's something to be changed, otherwise nothing
    function setLight(row, col, state) {

        let theLight = $('.'+row+'_'+col);

        if (theLight.hasClass('on') && !state) { // If the light is on and has no state, turn it off 
            theLight.removeClass('on');
            theLight.addClass('off');
        } else if (theLight.hasClass('off') && state) { // If the light if off and has state, turn it on 
            theLight.removeClass('off');
            theLight.addClass('on');
        } 
    }

    function drawMessage(messageArray, leftPointer) {
        let messageLength = messageArray.length;

        if (messageLength > 0) {
            for (let col = 0; col < messageLength; col++) { 
                for (let row = 0; row < height; row++) {
                    let offsetCol = leftPointer + col;
                    if (offsetCol < scroller_length || offsetCol >= 0) {
                        setLight(row, offsetCol, messageArray[col][row]);
                    }
                }
            }
        }
    }

    function textToLED(theWord) {
        let theMessage = [];
        theWord = theWord.toUpperCase();
        for (let i=0; i < theWord.length; i++) {
            theMessage.push(charToLED(theWord.charAt(i)));
            theMessage.push(charToLED());
        }

        let flatten = [];
        flatten = flatten.concat.apply(flatten, theMessage);

        return flatten;
    }

    function charToLED(theChar) {
        let theLed = [];

        switch(theChar){
            case ':' :
            theLed = [[false, false, false, false, false, false, false], 
                    [false, false, false, false, false, false, false], 
                    [false, false, true, false, true, false, false],
                    [false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false]];
            break;
            case '|' :
            theLed = [[false, false, false, false, false, false, false], 
                    [false, false, false, false, false, false, false], 
                    [true, true, true, true, true, true, true],
                    [false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false]];
            break;
            case '!' :
            theLed = [[false, false, false, false, false, false, false], 
                    [false, false, false, false, false, false, false], 
                    [true, true, true, true, true, false, true],
                    [false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false]];
            break;
            case '.' :
            theLed = [[false, false, false, false, false, false, false], 
                    [false, false, false, false, false, false, false], 
                    [false, false, false, false, false, false, true],
                    [false, false, false, false, false, false, true],
                    [false, false, false, false, false, false, true]];
            break;
            case 'A' :
              theLed = [[false, false, true, true, true, true, true], 
                        [false, true, false, false, true, false, false], 
                        [true, false, false, false, true, false, false],
                        [false, true, false, false, true, false, false],
                        [false, false, true, true, true, true, true]];
              break;
            case 'B' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [false, true, true, false, true, true, false]];
              break;
                case 'C' :
              theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, false, false, false, true, false]]; 
              break;
             case 'D' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, true, true, true, true, false]]; 
              break;
            case 'E' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, false, false, false, true]];
              break;
            case 'F' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, false, false, false, false]];
              break;
            case 'G' :
              theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, true, false, true],
                        [true, true, false, false, true, true, true]];
              break;
            case 'H' :
              theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, true, false, false, false],
                        [false, false, false, true, false, false, false],
                        [false, false, false, true, false, false, false],
                        [true, true, true, true, true, true, true]];
              break;
            case 'I' :
              theLed = [[false, false, false, false, false, false, false], 
                        [true, false, false, false, false, false, true],
                        [true, true, true, true, true, true, true],
                        [true, false, false, false, false, false, true],
                        [false, false, false, false, false, false, false]];
              break;
            case 'J' :
              theLed = [[false, false, false, false, false, true, false], 
                        [false, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false],
                        [true, false, false, false, false, false, false]];
              break;  
              case 'K' :
              theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, true, false, false, false],
                        [false, false, true, false, true, false, false],
                        [false, true, false, false, false, true, false],
                        [true, false, false, false, false, false, true]];
              break;
              case 'L' :
              theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true]];
              break;
              case 'M' :
              theLed = [[true, true, true, true, true, true, true], 
                        [false, true, false, false, false, false, false],
                        [false, false, true, false, false, false, false],
                        [false, true, false, false, false, false, false],
                        [true, true, true, true, true, true, true]];
              break;
              case 'N' :
              theLed = [[true, true, true, true, true, true, true], 
                        [false, false, true, false, false, false, false],
                        [false, false, false, true, false, false, false],
                        [false, false, false, false, true, false, false],
                        [true, true, true, true, true, true, true]];
              break;
              case 'O' :
              theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, true, true, true, true, false]];
              break;
              case 'P' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [false, true, true, false, false, false, false]];
              break;
              case 'Q' :
              theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, true, false, true],
                        [true, false, false, false, false, true, false],
                        [false, true, true, true, true, false, true]];
              break;
              case 'R' :
              theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [false, true, true, false, true, true, true]];
              break;
              case 'S' :
              theLed = [[false, true, true, false, false, false, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, false, true, true, false]];
              break;
              case 'T' :
              theLed = [[true, false, false, false, false, false, false], 
                        [true, false, false, false, false, false, false],
                        [true, true, true, true, true, true, true],
                        [true, false, false, false, false, false, false],
                        [true, false, false, false, false, false, false]];
              break;
              case 'U' :
              theLed = [[true, true, true, true, true, true, false], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false]];
              break;
              case 'V' :
              theLed = [[true, true, true, true, true, false, false], 
                        [false, false, false, false, false, true, false],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, true, false],
                        [true, true, true, true, true, false, false]];
              break;
              case 'W' :
              theLed = [[true, true, true, true, true, true, false], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, true, true, false],
                        [false, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false]];
              break;
              case 'X' :
              theLed = [[true, false, false, false, false, false, true], 
                        [false, true, true, false, true, true, false],
                        [false, false, false, true, false, false, false],
                        [false, true, true, false, true, true, false],
                        [true, false, false, false, false, false, true]];
              break;
              case 'Y' :
              theLed = [[true, false, false, false, false, false, false], 
                        [false, true, false, false, false, false, false],
                        [false, false, true, true, true, true, true],
                        [false, true, false, false, false, false, false],
                        [true, false, false, false, false, false, false]];
              break;
              case 'Z' :
              theLed = [[true, false, false, false, false, true, true], 
                        [true, false, false, false, true, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, true, false, false, false, true],
                        [true, true, false, false, false, false, true]];
              break;
              default:
        
        if (theChar !== ":" || theChar !== "!") {
            theLed = [[false, false, false, false, false, false, false]];
        }
    }  
    return theLed;
    }

    function draw() {
        setTimeout(function() {
            requestAnimationFrame(draw);
        
             if(leftPointer==furthestLeftPoint){
                leftPointer = scroller_length + 1;
           }
        
           drawMessage(message, leftPointer);
           leftPointer--;     
        }, 1000/fps);
    }

    // Lightbulbs around the marquee 

    let leftPosition = 150;
    let rightPosition = 800;
    let lightArray = [];

    for (let light = 1; light <= 32; light++) {
        $('#marqueeAndLights').append('<div id="bulb'+light+'" class="bulb bulbOff"><img class="bulbWire" src="../Currated/currated/bulbWire.svg")></div>')

        if (light <= 14) {
            $('#bulb'+light).css("bottom", "6px")
            $('#bulb'+light).css("left", leftPosition+"px")
            leftPosition += 50;
            $('#bulb'+light).css("transform", "rotate(405deg)")
        }

        if (light == 15) {
            $('#bulb'+light).css("bottom", "-20px")
            $('#bulb'+light).css("left", "834px")
            $('#bulb'+light).css("transform", "rotate(105deg)")
        }

        if (light == 16) {
            $('#bulb'+light).css("bottom", "-54px")
            $('#bulb'+light).css("left", "835px")
            $('#bulb'+light).css("transform", "rotate(165deg)")
        }

        if (light >= 17 && light < 31 ) {
            $('#bulb'+light).css("bottom", "-76px")
            $('#bulb'+light).css("left", rightPosition+"px")
            rightPosition -= 50;
            $('#bulb'+light).css("transform", "rotate(225deg)")
        } 

        if (light == 31) {
            $('#bulb'+light).css("bottom", "-54px")
            $('#bulb'+light).css("left", "116px")
            $('#bulb'+light).css("transform", "rotate(285deg)")
        }

        if (light == 32) {
            $('#bulb'+light).css("bottom", "-20px")
            $('#bulb'+light).css("left", "115px")
            $('#bulb'+light).css("transform", "rotate(335deg)")
        }

        lightArray.push(light);
    }

    // Illuminating light loop 
    let firstLightOn = false; 
    let lapseTime = 0500;
    lightArray.shift();

    setTimeout(function(){ 
        $('#bulb1').removeClass("bulbOff");
        $('#bulb1').addClass("bulbAnimation");
        firstLightOn = true;
        lightsAnimation();
    }, 1000);

    lightsAnimation = function() {
        if (lightArray.length !== 0) {
            setInterval(() => {
                $('#bulb'+lightArray[0]).removeClass("bulbOff");
                lightArray.shift();
                lightsAnimation();
                lapseTime %= 300;
            }, lapseTime);
        }
        if (lightArray.length == 1) {
            draw();
            $('#bulb29').addClass("bulbAnimation");

            setTimeout( () => {
                $("#theatermasks").addClass('turnOnOpacity');
                $("#dice").addClass('turnOnOpacity');
                $("#crystal").addClass('turnOnOpacity');
            }, 600);   
            
            setTimeout(() => {
                $('#movie-container').css('opacity', '1');
                $('#movie-container').css('transition', 'opacity 2s');
                $('#pagination').removeClass('hidden');
            }, 1200);
        }
    }

    setInterval(() => {$('#bulb13').addClass("bulbAnimation")}, 2000);
});