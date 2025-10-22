const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Comprehensive quotes collection
const quotes = {
  success: [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only impossible journey is the one you never begin.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Don't be afraid to give up the good to go for the great.",
    "The way to get started is to quit talking and begin doing.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The road to success is always under construction.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Opportunities don't happen. You create them.",
    "Success is not about being the best. It's about being better than you were yesterday."
  ],
  friendship: [
    "A real friend is one who walks in when the rest of the world walks out.",
    "Friendship is the only cement that will ever hold the world together.",
    "True friendship comes when the silence between two people is comfortable.",
    "A friend is someone who knows all about you and still loves you.",
    "Friendship is born at that moment when one person says to another, 'What! You too?'",
    "Good friends are like stars. You don't always see them, but you know they're there.",
    "Friendship is the wine of life.",
    "A true friend is the greatest of all blessings.",
    "Friends are the family we choose for ourselves.",
    "In the cookie of life, friends are the chocolate chips."
  ],
  motivation: [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it."
  ],
  dreams: [
    "All our dreams can come true if we have the courage to pursue them.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Dream big and dare to fail.",
    "A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Dreams are the seedlings of realities.",
    "If you can dream it, you can achieve it.",
    "Dreams don't work unless you do.",
    "The only thing that will stop you from fulfilling your dreams is you.",
    "Chase your dreams until you catch them."
  ],
  love: [
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "The best thing to hold onto in life is each other.",
    "Love is not about how much you say 'I love you', but how much you prove that it's true.",
    "Where there is love there is life.",
    "Love is composed of a single soul inhabiting two bodies.",
    "Love is not finding someone to live with. It's finding someone you can't live without.",
    "The greatest happiness of life is the conviction that we are loved.",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls.",
    "To love and be loved is to feel the sun from both sides.",
    "Love is the bridge between two hearts."
  ],
  life: [
    "Life is what happens to you while you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Life is really simple, but we insist on making it complicated.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "The good life is one inspired by love and guided by knowledge.",
    "Life is short, and it's up to you to make it sweet.",
    "Life is a journey, not a destination.",
    "The meaning of life is to find your gift. The purpose of life is to give it away."
  ],
  business: [
    "The way to get started is to quit talking and begin doing.",
    "Innovation distinguishes between a leader and a follower.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "Opportunities don't happen. You create them.",
    "A business that makes nothing but money is a poor business.",
    "The customer's perception is your reality."
  ],
  leadership: [
    "A leader is one who knows the way, goes the way, and shows the way.",
    "Leadership is not about being in charge. It's about taking care of those in your charge.",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    "Leadership is the capacity to translate vision into reality.",
    "A good leader takes a little more than his share of the blame, a little less than his share of the credit.",
    "Leadership is about making others better as a result of your presence and making sure that impact lasts in your absence.",
    "The art of leadership is saying no, not saying yes. It is very easy to say yes.",
    "Leadership is not a position or a title, it is action and example.",
    "Great leaders are willing to sacrifice their own personal interests for the good of the team.",
    "Leadership is the ability to guide others without force into a direction or decision that leaves them still feeling empowered."
  ],
  innovation: [
    "Innovation distinguishes between a leader and a follower.",
    "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    "Innovation is the specific instrument of entrepreneurship.",
    "If you always do what you always did, you will always get what you always got.",
    "The secret to change is to focus all of your energy not on fighting the old, but on building the new.",
    "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
    "The best way to predict the future is to create it.",
    "Innovation comes from the producer - not from the customer.",
    "Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.",
    "Innovation is the calling card of the future."
  ],
  wisdom: [
    "The only true wisdom is in knowing you know nothing.",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "Knowledge speaks, but wisdom listens.",
    "The beginning of wisdom is the definition of terms.",
    "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    "The wise find pleasure in water; the virtuous find pleasure in hills.",
    "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
    "The art of being wise is knowing what to overlook.",
    "Wisdom is knowing the right path to take. Integrity is taking it."
  ],
  courage: [
    "Courage is not the absence of fear, but action in spite of it.",
    "You have been assigned this mountain to show others it can be moved.",
    "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    "It takes courage to grow up and become who you really are.",
    "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    "The brave may not live forever, but the cautious do not live at all.",
    "Courage is resistance to fear, mastery of fear - not absence of fear.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    "Have courage and be kind."
  ],
  happiness: [
    "Happiness is not something ready made. It comes from your own actions.",
    "The purpose of our lives is to be happy.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "Happiness is not by chance, but by choice.",
    "The happiest people don't have the best of everything, they just make the best of everything.",
    "Happiness is a warm puppy.",
    "Count your age by friends, not years. Count your life by smiles, not tears.",
    "Happiness is not the absence of problems, it's the ability to deal with them.",
    "The secret of happiness is freedom, the secret of freedom is courage."
  ],
  growth: [
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    "Growth begins at the end of your comfort zone.",
    "Be yourself; everyone else is already taken.",
    "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
    "Personal growth is not a matter of learning new information but of unlearning old limits.",
    "The only person you are destined to become is the person you decide to be.",
    "Growth and comfort do not coexist.",
    "If you want something you've never had, you must be willing to do something you've never done.",
    "Every master was once a disaster."
  ],
  sadness: [
    "The word 'happy' would lose its meaning if it were not balanced by sadness.",
    "Tears are words that need to be written.",
    "Sometimes you need to sit lonely on the floor in a quiet room in order to hear your own voice.",
    "The cure for pain is in the pain.",
    "Sadness flies away on the wings of time.",
    "Behind every sweet smile, there is a bitter sadness that no one can see.",
    "It's sad when someone you know becomes someone you knew.",
    "The walls we build around us to keep sadness out also keeps out the joy.",
    "Sadness is but a wall between two gardens.",
    "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water."
  ],
  heartbreak: [
    "Sometimes good things fall apart so better things can fall together.",
    "The heart was made to be broken.",
    "It is better to have loved and lost than never to have loved at all.",
    "Hearts will never be practical until they are made unbreakable.",
    "The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten.",
    "You can't buy love, but you can pay heavily for it.",
    "The hottest love has the coldest end.",
    "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    "Sometimes the heart sees what is invisible to the eye.",
    "A broken heart is the worst. It's like having broken ribs. Nobody can see it, but it hurts every time you breathe."
  ],
  failure: [
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Failure is the condiment that gives success its flavor.",
    "The only real failure in life is not to be true to the best one knows.",
    "Failure is not the opposite of success; it's part of success.",
    "Don't be afraid to fail. Be afraid not to try.",
    "Failure is a bruise, not a tattoo.",
    "Every failure brings with it the seed of an equivalent success.",
    "Failure is not falling down but refusing to get up."
  ],
  pain: [
    "The wound is the place where the Light enters you.",
    "Pain is inevitable. Suffering is optional.",
    "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.",
    "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.",
    "Pain makes you stronger, tears make you braver, heartbreak makes you wiser.",
    "The pain you feel today is the strength you feel tomorrow.",
    "Behind every beautiful thing, there's some kind of pain.",
    "You are stronger than you think and more capable than you imagine.",
    "Pain is temporary, but quitting lasts forever.",
    "The deeper that sorrow carves into your being, the more joy you can contain."
  ],
  loneliness: [
    "The greatest thing in the world is to know how to belong to oneself.",
    "Loneliness is not lack of company, loneliness is lack of purpose.",
    "The soul that sees beauty may sometimes walk alone.",
    "Being alone has a power that very few people can handle.",
    "Loneliness is a sign you are in desperate need of yourself.",
    "Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself.",
    "The best part about being alone is that you really don't have to answer to anybody.",
    "Loneliness is the human condition. Cultivating solitude is the beginning of making peace with loneliness.",
    "Learn to be alone and to like it. There is nothing more freeing and empowering than learning to like your own company.",
    "Solitude is where I place my chaos to rest and awaken my inner peace."
  ],
  depression: [
    "Even the darkest night will end and the sun will rise.",
    "You are stronger than you know. More capable than you ever dreamed. And you are loved more than you could possibly imagine.",
    "Your current situation is not your final destination. The best is yet to come.",
    "It's okay to not be okay. It's okay to not have it all figured out.",
    "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.",
    "You have been assigned this mountain to show others it can be moved.",
    "The bravest thing you can do when you are not brave is to profess courage and act accordingly.",
    "Promise me you'll always remember: You're braver than you believe, stronger than you seem, and smarter than you think.",
    "Rock bottom became the solid foundation on which I rebuilt my life.",
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity."
  ],
  betrayal: [
    "The saddest thing about betrayal is that it never comes from your enemies.",
    "It is easier to forgive an enemy than to forgive a friend.",
    "Betrayal is the only truth that sticks.",
    "The worst pain in the world goes beyond the physical. Even further beyond any other emotional pain one can feel. It is the betrayal of a friend.",
    "Sometimes the person you'd take a bullet for ends up being the one behind the gun.",
    "Betrayal can only happen if you love.",
    "The blade of betrayal, the sharpest of weapons, is wielded not by your enemies, but by your friends.",
    "Trust is like a mirror, you can fix it if it's broken, but you can still see the crack in that reflection.",
    "Betrayal is never easy to handle and there is no right way to accept it.",
    "The trust of the innocent is the liar's most useful tool."
  ],
  regret: [
    "We all make mistakes, have struggles, and even regret things in our past. But you are not your mistakes, you are not your struggles.",
    "Regret is an odd emotion because it comes only upon reflection. Regret lacks immediacy.",
    "Never regret anything that made you smile.",
    "The only things you regret are the things you don't do.",
    "Regret is a waste of time. You can't change the past, but you can ruin the present by worrying about the future.",
    "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy.",
    "I don't regret the things I've done, I regret the things I didn't do when I had the chance.",
    "Regret is insight that comes a day too late.",
    "The bitterest tears shed over graves are for words left unsaid and deeds left undone.",
    "Don't regret knowing the people that came into your life. Good people give you happiness. Bad people give you experience."
  ],
  anxiety: [
    "Anxiety is the dizziness of freedom.",
    "You are not your anxiety. You have anxiety. You are not sad. You have sadness. You are not your mental illness. You have a mental illness.",
    "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    "The cave you fear to enter holds the treasure you seek.",
    "Worrying is like walking around with an umbrella waiting for it to rain.",
    "Anxiety is the price we pay for an advanced imagination.",
    "You don't have to control your thoughts. You just have to stop letting them control you.",
    "Breathe in peace, breathe out stress.",
    "Anxiety is not a sign of weakness. It takes strength to battle anxiety every single day.",
    "Your anxiety is lying to you. You are loved and you are going to be okay."
  ],
  hope: [
    "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
    "Once you choose hope, anything's possible.",
    "Hope is being able to see that there is light despite all of the darkness.",
    "Hope is the only thing stronger than fear.",
    "In the depth of winter, I finally learned that there was in me an invincible summer.",
    "Hope is a waking dream.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Hope begins in the dark, the stubborn hope that if you just show up and try to do the right thing, the dawn will come.",
    "Hope is not pretending that troubles don't exist. It is the trust that they will not last forever.",
    "Even the darkest night will end and the sun will rise."
  ],
  healing: [
    "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.",
    "The wound is the place where the Light enters you.",
    "Healing is not an overnight process. It is a daily cleansing of pain, hope, and grace.",
    "Your healing matters. Your feelings matter. You matter.",
    "Healing takes time, and asking for help is a courageous step.",
    "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
    "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
    "The practice of forgiveness is our most important contribution to the healing of the world.",
    "Healing yourself is connected with healing others.",
    "Time doesn't heal emotional pain, you need to learn how to let go."
  ],
  superhero: [
    "With great power comes great responsibility. - Spider-Man",
    "I am Iron Man. - Tony Stark",
    "I can do this all day. - Captain America",
    "I am vengeance. I am the night. I am Batman. - Batman",
    "It's not who I am underneath, but what I do that defines me. - Batman",
    "Hope is like car keys. Easy to lose, but if you dig around, it's usually close by. - Deadpool",
    "The hardest choices require the strongest wills. - Thanos",
    "I am Groot. - Groot",
    "Sometimes you gotta run before you can walk. - Iron Man",
    "Heroes are made by the path they choose, not the powers they are graced with. - Iron Man"
  ],
  batman: [
    "I am vengeance. I am the night. I am Batman.",
    "It's not who I am underneath, but what I do that defines me.",
    "Why do we fall? So we can learn to pick ourselves up.",
    "A hero can be anyone, even a man doing something as simple as putting a coat around a young boy's shoulders.",
    "The night is darkest just before the dawn.",
    "You either die a hero, or live long enough to see yourself become the villain.",
    "I won't kill you, but I don't have to save you.",
    "Sometimes the truth isn't good enough, sometimes people deserve more.",
    "Criminals are a superstitious, cowardly lot.",
    "I have one power. I never give up."
  ],
  superman: [
    "I'm here to fight for truth, justice, and the American way.",
    "There is a right and a wrong in the universe, and that distinction is not hard to make.",
    "You're much stronger than you think you are. Trust me.",
    "Dreams save us. Dreams lift us up and transform us.",
    "The 'S' stands for hope.",
    "I can only tell you what I believe, Diana. And what I believe is that written across the sky was a single word... hope.",
    "You can be the greatest hero the world has ever known if you just believe in yourself.",
    "Sometimes you have to take a leap of faith first. The trust part comes later.",
    "In the end, the world didn't need a savior, just a believer.",
    "No matter how dark things get, there's always hope."
  ],
  spiderman: [
    "With great power comes great responsibility.",
    "Anyone can wear the mask. You could wear the mask.",
    "I believe there's a hero in all of us.",
    "The only way to live a good life is to act on your emotions.",
    "We all have secrets: the ones we keep... and the ones that are kept from us.",
    "Not everyone is meant to make a difference. But for me, the choice to lead an ordinary life is no longer an option.",
    "Whatever life holds in store for me, I will never forget these words: With great power comes great responsibility.",
    "I'm not a fighter by nature, but... I'll fight for love.",
    "Being Spider-Man is not about the mask, it's about having the courage to do what's right.",
    "The real crime would be not to finish what we started."
  ],
  ironman: [
    "I am Iron Man.",
    "Sometimes you gotta run before you can walk.",
    "Heroes are made by the path they choose, not the powers they are graced with.",
    "I shouldn't be alive, unless it was for a reason.",
    "The truth is... I am Iron Man.",
    "I prefer the weapon you only have to fire once.",
    "Genius, billionaire, playboy, philanthropist.",
    "I told you, I don't want to join your super secret boy band.",
    "If you're nothing without the suit, then you shouldn't have it.",
    "Part of the journey is the end."
  ],
  captainamerica: [
    "I can do this all day.",
    "I'm just a kid from Brooklyn.",
    "The price of freedom is high. It always has been. But it's a price I'm willing to pay.",
    "I don't like bullies. I don't care where they're from.",
    "When the mob and the press and the whole world tell you to move, your job is to plant yourself like a tree beside the river of truth.",
    "Compromise where you can. Where you can't, don't.",
    "I'm not looking for forgiveness, and I'm way past asking permission.",
    "I could do this all day.",
    "Before we get started, does anyone want to get out?",
    "That's what we do. We fight. So that others can have their best life."
  ],
  wonderwoman: [
    "I will fight for those who cannot fight for themselves.",
    "It's not about deserve, it's about what you believe. And I believe in love.",
    "I used to want to save the world. To end war and bring peace to mankind.",
    "Only love can truly save the world.",
    "Fighting doesn't make you a hero.",
    "You're stronger than you believe. You have greater powers than you know.",
    "I will never be the same. I have been touched by the gods.",
    "The truth is bigger than all of us.",
    "What one does when faced with the truth is more difficult than you'd think.",
    "I am Diana of Themyscira, daughter of Hippolyta, Queen of the Amazons."
  ],
  thor: [
    "I am Thor, son of Odin!",
    "For honor! For Asgard!",
    "I would rather be a good man than a great king.",
    "Whosoever holds this hammer, if he be worthy, shall possess the power of Thor.",
    "I choose to run toward my problems, and not away from them.",
    "Sometimes the best thing we can do is to start over.",
    "A wise king never seeks out war, but he must always be ready for it.",
    "I have been falling for thirty minutes!",
    "The hardest choices require the strongest wills.",
    "What matters most is what you choose to be now."
  ],
  hulk: [
    "Hulk smash!",
    "Don't make me angry. You wouldn't like me when I'm angry.",
    "The madder Hulk gets, the stronger Hulk gets!",
    "Hulk is strongest there is!",
    "Hulk no like Banner!",
    "Hulk protect!",
    "Hulk strongest one there is!",
    "Hulk just want to be left alone!",
    "Hulk is not monster! Hulk is hero!",
    "Sometimes Hulk think Banner only friend Hulk have."
  ]
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: "🚀 AI Poster Generator API is running!",
    endpoints: ["/generate", "/health"],
    status: "active"
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "healthy", service: "poster-generator" });
});

app.post('/generate', (req, res) => {
  try {
    console.log('🔍 Received request body:', req.body);
    console.log('🔍 Request headers origin:', req.headers.origin);

    const { topic, style } = req.body;

    console.log(`📝 Generating poster - Topic: ${topic}, Style: ${style}`);

    const topicLower = (topic || 'motivation').toLowerCase().trim();
    const selectedStyle = style || 'modern';

    // Get quote based on topic
    let quote;
    if (quotes[topicLower]) {
      const topicQuotes = quotes[topicLower];
      quote = topicQuotes[Math.floor(Math.random() * topicQuotes.length)];
    } else {
      quote = `Believe in your ${topic} and make it happen!`;
    }

    // Generate image URL based on topic
    let imageUrl;
    const superheroTopics = ['superhero', 'batman', 'superman', 'spiderman', 'ironman', 'captainamerica', 'wonderwoman', 'thor', 'hulk'];

    if (superheroTopics.includes(topicLower)) {
      // Use superhero-themed images
      const superheroImages = {
        batman: [
          'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&h=600&fit=crop', // Dark city
          'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop', // Night city
          'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop', // Dark building
        ],
        superman: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', // Sky/clouds
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop', // Blue sky
          'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop', // City skyline
        ],
        spiderman: [
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop', // City buildings
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop', // Urban landscape
          'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop', // City view
        ],
        ironman: [
          'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop', // Tech/city
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop', // Tech/space
          'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop', // Modern city
        ],
        captainamerica: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', // American flag colors
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop', // Blue sky
          'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop', // Patriotic
        ],
        wonderwoman: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', // Golden hour
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop', // Warrior landscape
          'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop', // Ancient/epic
        ],
        thor: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', // Storm/lightning
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop', // Epic sky
          'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop', // Mountains
        ],
        hulk: [
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', // Green forest
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', // Nature/power
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', // Destruction/power
        ]
      };

      if (superheroImages[topicLower]) {
        const heroImages = superheroImages[topicLower];
        imageUrl = heroImages[Math.floor(Math.random() * heroImages.length)];
      } else {
        // Generic superhero image
        const genericSuperhero = [
          'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop'
        ];
        imageUrl = genericSuperhero[Math.floor(Math.random() * genericSuperhero.length)];
      }
    } else {
      // Use regular random images for non-superhero topics
      const imageId = Math.floor(Math.random() * 900) + 100;
      imageUrl = `https://picsum.photos/800/600?random=${imageId}`;
    }

    const response = {
      quote,
      image_url: imageUrl,
      topic: topicLower,
      style: selectedStyle
    };

    console.log(`✅ Generated: ${quote.substring(0, 50)}...`);
    res.json(response);

  } catch (error) {
    console.error('❌ Error generating poster:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Poster Generator Server started!`);
  console.log(`📍 Server running at: http://localhost:${PORT}`);
  console.log(`🎯 Ready to generate amazing posters!`);
});