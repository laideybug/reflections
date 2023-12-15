function applyRandomBackgroundColour() {
  const randomIndex = Math.floor(Math.random() * colours.length);
  const colour = colours[randomIndex];
  document.body.style.background = colour;
}

const colours = [
  '#ff9ff3', // Jigglypuff
  '#f368e0', // Lián Hóng Lotus Pink
  '#00d2d3', // Jade Dust
  '#01a3a4', // Aqua Velvet
  '#feca57', // Cadandora Yellow
  '#ff9f43', // Double Dragon Skin
  '#54a0ff', // Joust Blue
  '#2e86de', // Bleu De France
  '#ff6b6b', // Pastel Red
  '#ee5253', // Amour
  '#5f27cd', // Nasu Purple
  '#341f97', // Bluebell
  '#48dbfb', // Megaman
  '#0abde3', // Cyanite
  '#8395a7', // Storm Petrel
  '#1dd1a1', // Wild Caribbean Green
  '#10ac84', // Dark Moundation Meadow
  '#576574', // Fuel Town
  '#222f3e'  // Imperial Primer 
];

function applyRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const image = images[randomIndex];
  const imageUrl = 'images/' + image;
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`;
}

const images = [
  'field1.jpg',
  'field2.jpg',
  'forest1.jpg',
  'forest2.jpg',
  'forest3.jpg',
  'forest4.jpg',
  'mountain1.jpg',
  'mountain2.jpg',
  'mountain3.jpg',
  'mountain4.jpg',
  'mountain5.jpg',
  'ocean1.jpg',
  'ocean2.jpg',
  'ocean3.jpg',
  'ocean4.jpg'
]

function showCurrentReflection() {
  const randomIndex = Math.floor(Math.random() * reflections.length);
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor((currentDate - startOfYear) / millisecondsInADay) - 1;
  const reflection = reflections[dayOfYear];
  const element = document.getElementById('reflection');
  if (element) {
    element.textContent = reflection;
  }
}

const reflections = [
  "Let love guide your actions.",
  "Nourish your soul with moments of gratitude and kindness.",
  "Connect with your inner child. It keeps your spirit alive.",
  "Stay committed to your principles.",
  "Virtue is the only true wealth.",
  "You are aligned with the energy of success.",
  "Find tranquility amidst chaos.",
  "Calmness is your inner compass.",
  "Choose what is in your power.",
  "Peacefulness envelops your being.",
  "Connect with others. Let meaningful relationships flourish.",
  "Nurture your passions. They fuel your zest for life.",
  "Calmness radiates from your core.",
  "Cultivate resilience, not resignation.",
  "Grant yourself permission to rest. It's essential for growth.",
  "Fortify your mind against fear.",
  "Live with intention and purpose.",
  "Cherish your journey. It's uniquely yours to experience.",
  "Seek clarity in simplicity. It reveals profound truths.",
  "Embrace the interconnectedness of all.",
  "Savor the sweetness of life.",
  "Contentment is wealth.",
  "Be present; embrace the silence.",
  "You are deserving of all the good things in life.",
  "Embrace impermanence, nothing lasts.",
  "Seek clarity in the midst of chaos.",
  "Live virtuously, regardless of circumstance.",
  "Find harmony in each mindful breath.",
  "Live in harmony with fate.",
  "You are worthy of all the good things coming your way.",
  "You radiate love and positivity.",
  "Act virtuously, regardless of reward.",
  "Live unknown.",
  "Peacefulness flows through your soul.",
  "Find freedom in restraint.",
  "Give yourself permission to dream. Dreams fuel possibilities.",
  "Be indifferent to external events.",
  "Silence nurtures your inner garden.",
  "Cultivate resilience in hardships.",
  "Embrace solitude. It's where self-discovery often begins.",
  "Quiet the mind; feel the peace.",
  "True pleasure is found in moderation.",
  "Let go of attachments, find freedom.",
  "Peace of mind is true wealth.",
  "Practice forgiveness. It liberates the heart and mind.",
  "Endure and renounce.",
  "Celebrate your progress. Every step forward counts.",
  "Discover peace within the pause.",
  "Friendship dances around the world.",
  "Find strength in vulnerability. It's a mark of courage.",
  "Surrender to the flow of life. It carries you to new shores.",
  "Respond with reason, not emotion.",
  "Simplicity is the highest form of sophistication.",
  "Each breath is a path to peace.",
  "Seek wisdom above all else.",
  "Your possibilities are endless.",
  "Nourish your soul with modesty.",
  "Respond with kindness and empathy.",
  "Simple joys abound.",
  "Embrace imperfection. It's a beautiful part of being human.",
  "Gratitude opens doors to abundance.",
  "Cultivate a heart of compassion.",
  "Serenity rests within your being.",
  "Stillness births inner clarity.",
  "Live modestly, enjoy immensely.",
  "Happiness is found in the present.",
  "Non-attachment leads to freedom.",
  "Focus on what you can control.",
  "Find balance. It's the key to a harmonious life.",
  "Let go of what you can't change.",
  "Tranquility is your natural state.",
  "Let go of attachments.",
  "Moderation is the key to lasting joy.",
  "Practice self-reflection daily.",
  "Explore the beauty in simplicity. Find joy in the little things.",
  "Tranquility resides within you.",
  "Embrace solitude. It's where self-discovery often begins.",
  "Enjoy the present moment.",
  "Pain is an opportunity for growth.",
  "Let go of what you can't control. focus on what you can.",
  "The wise find pleasure in moderation.",
  "You radiate confidence and self-assurance.",
  "Acceptance brings inner peace.",
  "Inner tranquility amidst chaos.",
  "Radiate kindness. It ignites positivity around you.",
  "Cultivate mindfulness. It anchors you in the present.",
  "Simplicity is the essence of happiness.",
  "Allow setbacks to shape you. They're stepping stones.",
  "You are surrounded by love and support.",
  "Embrace each experience as a teacher.",
  "Listen to your body's signals. It often knows what you need.",
  "You trust in your journey and its timing.",
  "In stillness, find serenity.",
  "Wisdom lies in tranquility.",
  "Live according to reason, not impulse.",
  "You embrace challenges as stepping stones.",
  "Character is fate.",
  "Bear and forbear.",
  "Calm thoughts create tranquil seas.",
  "Practice virtue, not just speak of it.",
  "You are surrounded by beauty and grace.",
  "The obstacle is the way.",
  "Peace is found in the present.",
  "Inner peace amidst external chaos.",
  "Follow nature's course, find peace.",
  "Embrace change with an open heart.",
  "Live deliberately, with purpose.",
  "Fortify your mind against fear.",
  "Dance in the rain of uncertainty. It nourishes resilience.",
  "Seek opportunities for learning. Knowledge enriches the soul.",
  "You are at peace with yourself and the world.",
  "Happiness springs from a peaceful mind.",
  "Face challenges with courage.",
  "Balance is the key to joy.",
  "Practice self-compassion. It fuels resilience.",
  "Honour your feelings. They're your inner compass.",
  "You are surrounded by positivity and abundance.",
  "You are constantly evolving and growing.",
  "Control your perceptions, direct your actions.",
  "Your potential is limitless.",
  "Seek understanding, not judgment.",
  "Your life is a reflection of your inner joy.",
  "Time is our most precious asset.",
  "The journey is the destination.",
  "Face challenges with courage. you're stronger than you know.",
  "Strength lies in conquering oneself.",
  "Cultivate resilience in the face of adversity.",
  "See opportunity in every obstacle.",
  "Avoid unnecessary desires.",
  "Embrace the unknown. It holds countless possibilities.",
  "Your thoughts echo tranquility.",
  "Cultivate a tranquil heart.",
  "Your journey is filled with purpose and meaning.",
  "Today's actions shape tomorrow.",
  "Cultivate a mind of clarity.",
  "You are proud of who you are becoming.",
  "Control your responses, not events.",
  "In letting go, find freedom.",
  "Peace blossoms in mindful moments.",
  "Practice patience, it's transformative.",
  "Your soul thrives in peacefulness.",
  "Connect with nature. It's a wellspring of tranquility.",
  "Adversity reveals character; face it.",
  "A little is enough.",
  "You attract success effortlessly.",
  "Your breath anchors your peace.",
  "Your presence makes a positive difference.",
  "Let go of attachments to outcomes.",
  "Harmony dwells within your silence.",
  "Enjoy the beauty of simplicity.",
  "Practice mindfulness. It's the art of being present.",
  "Focus on being, not appearing.",
  "Seek pleasure in moderation.",
  "Joy thrives in simplicity.",
  "You trust in your abilities to achieve your dreams.",
  "Wisdom lies in simplicity.",
  "Suffering reveals life's lessons.",
  "Breathe deeply. It calms the mind and body.",
  "Seek wisdom in every experience.",
  "True pleasure is found in inner contentment.",
  "Strive for excellence, not perfection.",
  "Serenity is the ultimate luxury.",
  "The present moment is everything.",
  "Happiness lies in contentment.",
  "Seek virtue, not wealth or fame.",
  "Savor life's simple pleasures.",
  "Practice compassion without expectation.",
  "Contentment is the greatest wealth.",
  "Memento mori—remember death.",
  "You are deserving of success and happiness.",
  "You deserve all the good that comes your way.",
  "Let go of judgment and prejudice.",
  "Cultivate a tranquil mind.",
  "Peace resides in your inner sanctuary.",
  "In silence, find serenity.",
  "Cultivate a mindset of abundance. Abundance attracts abundance.",
  "Stay committed to your values.",
  "Savor moments of stillness. They rejuvenate the spirit.",
  "Inward peace guides your thoughts.",
  "Focus on what's within your control.",
  "You are empowered to create your reality.",
  "Be present, let go of distractions.",
  "Embrace simplicity, reject excess.",
  "Your inner calm guides your journey.",
  "Let go of what you cannot control.",
  "Meditation opens doors to peace.",
  "Create moments of joy. They're the heart's sustenance.",
  "Embrace change. It's a doorway to growth.",
  "Kindness to yourself matters. Treat yourself with compassion.",
  "Live in accordance with nature.",
  "The path to happiness is within.",
  "Celebrate progress, no matter how small. Every step counts.",
  "Strive for self-mastery.",
  "Silence nourishes your spirit.",
  "Practice self-awareness and self-reflection.",
  "Meditate on the rhythm of life.",
  "Live with mindful intention.",
  "Your heart is open, and you are ready to receive.",
  "Find joy in the ordinary moments.",
  "Embrace life's simple delights.",
  "Find strength in self-discipline.",
  "Inner peace is the greatest treasure.",
  "Value time, our most precious asset.",
  "You are a source of inspiration to others.",
  "You are deserving of love and happiness.",
  "Guard your mind against negativity.",
  "Find joy in the journey.",
  "Discover the power of saying 'no'. It's self-care.",
  "Listen to the whispers of your soul.",
  "Luxury is a state of mind.",
  "Your mind is a sanctuary of calm.",
  "In the quiet, discover wisdom.",
  "Your heartbeat sings tranquility.",
  "Embrace the present moment.",
  "Live in harmony with nature.",
  "Express gratitude. it opens doors to abundant living.",
  "The wise are content with what they have.",
  "Act with loving-kindness.",
  "Practice gratitude for what you have.",
  "You are grateful for every experience.",
  "Self-reliance breeds resilience.",
  "Find solace in the silent spaces.",
  "Virtue is the only true good.",
  "Choose actions over words.",
  "Your essence thrives in stillness.",
  "Seek truth within, not outside.",
  "Speak kindly to yourself. Your inner voice matters.",
  "Live with kindness and gratitude.",
  "Cultivate a compassionate heart.",
  "Today's challenge is tomorrow's strength.",
  "Focus on principles, not outcomes.",
  "Your essence finds solace in stillness.",
  "Choose serenity over turmoil.",
  "Peace comes from within.",
  "The path to virtue is through practice.",
  "Every ending is a new beginning.",
  "Live mindfully in the present moment.",
  "Your breath anchors you in peace.",
  "You are surrounded by love, peace, and joy.",
  "Peace flows through each silent moment.",
  "Dare to be vulnerable. It's where true connections form.",
  "Share your light. It brightens the world around you.",
  "Practice self-discipline daily.",
  "Calmness resides within your breath.",
  "Live according to nature.",
  "You are confident in your ability to overcome obstacles.",
  "You are capable of achieving greatness.",
  "Embrace simplicity, find harmony.",
  "Remain steadfast in adversity.",
  "Nurture your spirit in quietude.",
  "Judge yourself by your own standards.",
  "Seek pleasure in the present moment.",
  "You embrace change with grace and positivity.",
  "Celebrate your uniqueness. It's your superpower.",
  "Every challenge you face is an opportunity for growth.",
  "Surround yourself with positivity. It fosters growth.",
  "Seek adventure. It expands your horizons.",
  "Live as if today is your last.",
  "Nurture a heart of gratitude.",
  "Acceptance liberates the mind.",
  "Simplicity leads to inner peace.",
  "Find peace within yourself.",
  "You are grateful for the abundance in your life.",
  "Strive for a virtuous character.",
  "The path to virtue is through practice.",
  "Let tranquility guide your day.",
  "Your mind is full of brilliant ideas.",
  "Compassion creates harmony.",
  "Dwell on the beauty of simplicity.",
  "Temperance leads to inner harmony.",
  "Peace resides in simplicity.",
  "Pleasure lies in a calm mind.",
  "Inner peace transcends external desires.",
  "Pain is an opportunity for growth.",
  "Flow like water, adapt to change.",
  "Stay present. Life's true treasures exist in the here and now.",
  "Your soul finds peace in quietude.",
  "Wisdom is found in simplicity.",
  "Respect the power of the mind.",
  "Focus on the present moment.",
  "Cherish each moment, it's precious.",
  "Make time for laughter. It's medicine for the soul.",
  "Find joy in selflessness.",
  "You are becoming the best version of yourself.",
  "You choose kindness and compassion.",
  "You are capable of turning dreams into reality.",
  "Breathe deeply; feel tranquility.",
  "You are the creator of your own happiness.",
  "You are resilient; you bounce back from setbacks.",
  "Compassion begins with oneself.",
  "Find balance in all things.",
  "Do no harm, cultivate goodness.",
  "Judge yourself by your own standards.",
  "True wealth is inner tranquility.",
  "Choose acceptance over complaint.",
  "You are resilient; you can weather any storm.",
  "Contentment breeds true happiness.",
  "Adversity reveals character.",
  "Find joy in the ordinary.",
  "Create a sanctuary inside yourself. Peace starts from within.",
  "Temperance leads to harmony.",
  "Embrace challenges as opportunities for growth and resilience.",
  "Appreciate the power of silence.",
  "Live in accordance with reason.",
  "True happiness is self-created.",
  "Embrace discomfort to grow stronger.",
  "Kindness is a universal language.",
  "Embrace the quiet within.",
  "Live discreetly and peacefully.",
  "Pursue excellence, not perfection.",
  "Celebrate diversity. It enriches our world.",
  "You are the architect of your destiny.",
  "You are worthy of love and kindness.",
  "Compassion knows no boundaries.",
  "Your spirit dances in quietude.",
  "Cherish the power of silence.",
  "Face challenges with a calm mind.",
  "In silence, find profound wisdom.",
  "Accept with grace what you cannot change.",
  "Be kind to yourself. You're doing the best you can.",
  "The past and future are out of reach.",
  "You embrace challenges as opportunities to learn.",
  "Harmony comes from within.",
  "Elegance lies in simplicity.",
  "Mindfulness heals the soul.",
  "Peaceful thoughts create calm seas.",
  "Cultivate inner peace through meditation.",
  "Inhale peace, exhale serenity.",
  "Believe in your potential. It's limitless.",
  "Cultivate inner peace.",
  "You attract positivity in every aspect of your life.",
  "True pleasure is found in simplicity.",
  "Mindfulness brings inner harmony.",
  "Inner tranquility amidst turmoil.",
  "Accept the things you cannot change.",
  "Release expectations. Let life unfold organically.",
  "You are in charge of your happiness.",
  "You are open to new possibilities and adventures.",
  "Live simply and authentically.",
  "Acceptance brings inner peace.",
  "Silence is the language of wisdom.",
  "Listen deeply, speak with kindness.",
  "Moderation leads to contentment.",
  "Allow yourself to evolve. Change is a beautiful part of life.",
  "The simple life is the happiest.",
  "Find freedom in self-discipline.",
  "You are grateful for every lesson life teaches you.",
  "Prioritize self-care. Rest, recharge, and find your balance.",
  "Freedom is found in simplicity.",
  "You are a beacon of positivity and hope.",
  "You are filled with inner strength and resilience.",
  "You are a magnet for positive energy.",
  "Find joy in the journey.",
  "Choose actions over reactions.",
  "Savor each moment mindfully.",
  "Let silence be your refuge."
];

function showDate() {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const currentMonth = monthNames[month];
  const day = currentDate.getDate();
  const daySuffix = getDaySuffix(day);
  const element = document.getElementById('date');
  if (element) {
    element.textContent = `${currentMonth} ${day}${daySuffix}`;
  }
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  applyRandomBackgroundImage();
  showCurrentReflection();
  showDate();
});
