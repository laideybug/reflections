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
  'forest1.jpg',
  'forest2.jpg',
  'mountain1.jpg',
  'mountain2.jpg',
  'ocean1.jpg',
  'ocean2.jpg'
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
  "Nourish your soul with moments of gratitude and kindness.",
  "Embrace challenges as opportunities for growth and resilience.",
  "Prioritize self-care. Rest, recharge, and find your balance.",
  "Connect with others. Let meaningful relationships flourish.",
  "Celebrate progress, no matter how small. Every step counts.",
  "Explore the beauty in simplicity. Find joy in the little things.",
  "Cultivate a mindset of abundance. Abundance attracts abundance.",
  "Stay present. Life's true treasures exist in the here and now.",
  "Grant yourself permission to rest. It's essential for growth.",
  "Embrace solitude. It's where self-discovery often begins.",
  "Allow yourself to evolve. Change is a beautiful part of life.",
  "Kindness to yourself matters. Treat yourself with compassion.",
  "Listen to your body's signals. It often knows what you need.",
  "Seek opportunities for learning. Knowledge enriches the soul.",
  "Celebrate your uniqueness. It's your superpower.",
  "Create a sanctuary inside yourself. Peace starts from within.",
  "Let go of what you can't control. focus on what you can.",
  "Express gratitude. it opens doors to abundant living.",
  "Face challenges with courage. you're stronger than you know.",
  "Savor moments of stillness. They rejuvenate the spirit.",
  "Dance in the rain of uncertainty. It nourishes resilience.",
  "Give yourself permission to dream. Dreams fuel possibilities.",
  "Nurture your passions. They fuel your zest for life.",
  "Practice forgiveness. It liberates the heart and mind.",
  "Connect with nature. It's a wellspring of tranquility.",
  "Cherish your journey. It's uniquely yours to experience.",
  "Find balance. It's the key to a harmonious life.",
  "Surround yourself with positivity. It fosters growth.",
  "Speak kindly to yourself. Your inner voice matters.",
  "Allow setbacks to shape you. They're stepping stones.",
  "Share your light. It brightens the world around you.",
  "Believe in your potential. It's limitless.",
  "Embrace imperfection. It's a beautiful part of being human.",
  "Surrender to the flow of life. It carries you to new shores.",
  "Celebrate your progress. Every step forward counts.",
  "Practice mindfulness. It's the art of being present.",
  "Embrace change. It's a doorway to growth.",
  "Create moments of joy. They're the heart's sustenance.",
  "Be kind to yourself. You're doing the best you can.",
  "Dare to be vulnerable. It's where true connections form.",
  "Discover the power of saying 'no'. It's self-care.",
  "Practice self-compassion. It fuels resilience.",
  "Seek adventure. It expands your horizons.",
  "Embrace the unknown. It holds countless possibilities.",
  "Make time for laughter. It's medicine for the soul.",
  "Honour your feelings. They're your inner compass.",
  "Celebrate diversity. It enriches our world.",
  "Embrace solitude. It's where self-discovery often begins.",
  "Breathe deeply. It calms the mind and body.",
  "Seek clarity in simplicity. It reveals profound truths.",
  "Find strength in vulnerability. It's a mark of courage.",
  "Release expectations. Let life unfold organically.",
  "Cultivate mindfulness. It anchors you in the present.",
  "Connect with your inner child. It keeps your spirit alive.",
  "Radiate kindness. It ignites positivity around you.",
  "You are capable of achieving greatness.",
  "Every challenge you face is an opportunity for growth.",
  "Your mind is full of brilliant ideas.",
  "You radiate confidence and self-assurance.",
  "You are worthy of love and kindness.",
  "You embrace change with grace and positivity.",
  "Your possibilities are endless.",
  "You are in charge of your happiness.",
  "You are resilient; you bounce back from setbacks.",
  "Your journey is filled with purpose and meaning.",
  "You attract success effortlessly.",
  "You are surrounded by positivity and abundance.",
  "You are becoming the best version of yourself.",
  "You deserve all the good that comes your way.",
  "You are grateful for every experience.",
  "Your life is a reflection of your inner joy.",
  "You are a magnet for positive energy.",
  "You trust in your abilities to achieve your dreams.",
  "You are surrounded by love and support.",
  "You are open to new possibilities and adventures.",
  "You are empowered to create your reality.",
  "You embrace challenges as stepping stones.",
  "Your potential is limitless.",
  "You are deserving of success and happiness.",
  "You are proud of who you are becoming.",
  "You are constantly evolving and growing.",
  "Your heart is open, and you are ready to receive.",
  "You choose kindness and compassion.",
  "You are at peace with yourself and the world.",
  "You are confident in your ability to overcome obstacles.",
  "You attract positivity in every aspect of your life.",
  "You are a source of inspiration to others.",
  "Your presence makes a positive difference.",
  "You are resilient; you can weather any storm.",
  "You are surrounded by beauty and grace.",
  "You are grateful for the abundance in your life.",
  "You radiate love and positivity.",
  "You are the architect of your destiny.",
  "You are deserving of all the good things in life.",
  "You are filled with inner strength and resilience.",
  "You embrace challenges as opportunities to learn.",
  "You are aligned with the energy of success.",
  "You are deserving of love and happiness.",
  "You trust in your journey and its timing.",
  "You are worthy of all the good things coming your way.",
  "You are capable of turning dreams into reality.",
  "You are a beacon of positivity and hope.",
  "You are grateful for every lesson life teaches you.",
  "You are surrounded by love, peace, and joy.",
  "You are the creator of your own happiness.",
  "Calmness resides within your breath.",
  "In stillness, find serenity.",
  "Peace flows through each silent moment.",
  "Your soul finds peace in quietude.",
  "Breathe deeply; feel tranquility.",
  "Meditate on the rhythm of life.",
  "Listen to the whispers of your soul.",
  "Your mind is a sanctuary of calm.",
  "Find harmony in each mindful breath.",
  "Inward peace guides your thoughts.",
  "Let silence be your refuge.",
  "Be present; embrace the silence.",
  "Nurture your spirit in quietude.",
  "Your essence thrives in stillness.",
  "Mindfulness brings inner harmony.",
  "Discover peace within the pause.",
  "Serenity rests within your being.",
  "Let tranquility guide your day.",
  "Silence is the language of wisdom.",
  "Your breath anchors your peace.",
  "Peace resides in your inner sanctuary.",
  "Calm thoughts create tranquil seas.",
  "Embrace the quiet within.",
  "Your essence finds solace in stillness.",
  "Meditation opens doors to peace.",
  "Peacefulness flows through your soul.",
  "Your heartbeat sings tranquility.",
  "Peace blossoms in mindful moments.",
  "Silence nurtures your inner garden.",
  "Calmness radiates from your core.",
  "Each breath is a path to peace.",
  "In silence, find profound wisdom.",
  "Tranquility is your natural state.",
  "Peace is found in the present.",
  "Your spirit dances in quietude.",
  "Stillness births inner clarity.",
  "Find solace in the silent spaces.",
  "Your thoughts echo tranquility.",
  "Quiet the mind; feel the peace.",
  "Inhale peace, exhale serenity.",
  "Your soul thrives in peacefulness.",
  "Harmony dwells within your silence.",
  "Peacefulness envelops your being.",
  "Your breath anchors you in peace.",
  "Calmness is your inner compass.",
  "In the quiet, discover wisdom.",
  "Peaceful thoughts create calm seas.",
  "Tranquility resides within you.",
  "Silence nourishes your spirit.",
  "Your inner calm guides your journey.",
  "The obstacle is the way.",
  "Endure and renounce.",
  "Control your perceptions, direct your actions.",
  "Focus on what you can control.",
  "Choose what is in your power.",
  "Adversity reveals character.",
  "Live according to nature.",
  "Bear and forbear.",
  "Embrace the present moment.",
  "Cultivate resilience, not resignation.",
  "Virtue is the only true good.",
  "Dwell on the beauty of simplicity.",
  "Judge yourself by your own standards.",
  "Practice self-discipline daily.",
  "Pain is an opportunity for growth.",
  "Stay committed to your values.",
  "Inner tranquility amidst chaos.",
  "Respond with reason, not emotion.",
  "Choose acceptance over complaint.",
  "Be indifferent to external events.",
  "Character is fate.",
  "Find joy in the journey.",
  "Fortify your mind against fear.",
  "Accept with grace what you cannot change.",
  "Time is our most precious asset.",
  "Live in accordance with reason.",
  "Memento mori—remember death.",
  "Strive for self-mastery.",
  "Let go of attachments.",
  "Wisdom lies in simplicity.",
  "Seek virtue, not wealth or fame.",
  "The past and future are out of reach.",
  "Practice self-awareness and self-reflection.",
  "Temperance leads to harmony.",
  "Cultivate resilience in the face of adversity.",
  "Live in harmony with fate.",
  "Strength lies in conquering oneself.",
  "Cherish the power of silence.",
  "Respect the power of the mind.",
  "Focus on principles, not outcomes.",
  "Inner peace amidst external chaos.",
  "The wise are content with what they have.",
  "Pursue excellence, not perfection.",
  "Guard your mind against negativity.",
  "Find freedom in restraint.",
  "Choose actions over words.",
  "Live virtuously, regardless of circumstance.",
  "Seek wisdom above all else.",
  "Self-reliance breeds resilience.",
  "The path to virtue is through practice.",
  "Live unknown.",
  "Friendship dances around the world.",
  "Simple joys abound.",
  "Luxury is a state of mind.",
  "Contentment is wealth.",
  "Savor life's simple pleasures.",
  "Wisdom lies in tranquility.",
  "Live discreetly and peacefully.",
  "A little is enough.",
  "Live in harmony with nature.",
  "The wise find pleasure in moderation.",
  "Cultivate inner peace.",
  "Freedom is found in simplicity.",
  "Seek pleasure in moderation.",
  "True wealth is inner tranquility.",
  "Nourish your soul with modesty.",
  "Happiness is found in the present.",
  "Balance is the key to joy.",
  "Avoid unnecessary desires.",
  "True pleasure is found in simplicity.",
  "Pleasure lies in a calm mind.",
  "Simplicity is the highest form of sophistication.",
  "Enjoy the present moment.",
  "Moderation leads to contentment.",
  "Cultivate a tranquil mind.",
  "Savor the sweetness of life.",
  "Peace resides in simplicity.",
  "Find joy in the ordinary.",
  "The simple life is the happiest.",
  "Inner peace transcends external desires.",
  "True pleasure is found in inner contentment.",
  "Live modestly, enjoy immensely.",
  "Serenity is the ultimate luxury.",
  "Enjoy the beauty of simplicity.",
  "Elegance lies in simplicity.",
  "Savor each moment mindfully.",
  "Peace of mind is true wealth.",
  "Cultivate a tranquil heart.",
  "Happiness springs from a peaceful mind.",
  "Joy thrives in simplicity.",
  "Contentment breeds true happiness.",
  "Inner peace is the greatest treasure.",
  "Find joy in the ordinary moments.",
  "True pleasure is found in moderation.",
  "Simplicity is the essence of happiness.",
  "Embrace life's simple delights.",
  "Moderation is the key to lasting joy.",
  "Seek pleasure in the present moment.",
  "True happiness is self-created.",
  "Contentment is the greatest wealth.",
  "Accept the things you cannot change.",
  "Focus on the present moment.",
  "Practice virtue, not just speak of it.",
  "Adversity reveals character; face it.",
  "Control your responses, not events.",
  "Live according to reason, not impulse.",
  "Embrace discomfort to grow stronger.",
  "Today's challenge is tomorrow's strength.",
  "Find tranquility amidst chaos.",
  "Live with intention and purpose.",
  "Seek wisdom in every experience.",
  "Temperance leads to inner harmony.",
  "Choose actions over reactions.",
  "See opportunity in every obstacle.",
  "Practice gratitude for what you have.",
  "Strive for excellence, not perfection.",
  "Cultivate resilience in hardships.",
  "Focus on what's within your control.",
  "Let go of what you can't change.",
  "Live in accordance with nature.",
  "Fortify your mind against fear.",
  "Virtue is the only true wealth.",
  "Face challenges with a calm mind.",
  "Judge yourself by your own standards.",
  "Respond with kindness and empathy.",
  "Pain is an opportunity for growth.",
  "Today's actions shape tomorrow.",
  "Value time, our most precious asset.",
  "Stay committed to your principles.",
  "Acceptance brings inner peace.",
  "Find strength in self-discipline.",
  "Remain steadfast in adversity.",
  "Seek clarity in the midst of chaos.",
  "Focus on being, not appearing.",
  "Let go of attachments to outcomes.",
  "Live as if today is your last.",
  "Seek understanding, not judgment.",
  "Choose serenity over turmoil.",
  "Inner tranquility amidst turmoil.",
  "Face challenges with courage.",
  "Practice self-reflection daily.",
  "Strive for a virtuous character.",
  "Find joy in the journey.",
  "Act virtuously, regardless of reward.",
  "Harmony comes from within.",
  "Appreciate the power of silence.",
  "Live simply and authentically.",
  "Find freedom in self-discipline.",
  "The path to virtue is through practice.",
  "Live deliberately, with purpose.",
  "Let go of attachments, find freedom.",
  "Live mindfully in the present moment.",
  "Practice compassion without expectation.",
  "Embrace impermanence, nothing lasts.",
  "Find peace within yourself.",
  "Seek truth within, not outside.",
  "Nurture a heart of gratitude.",
  "The path to happiness is within.",
  "Kindness is a universal language.",
  "Suffering reveals life's lessons.",
  "Let go of what you cannot control.",
  "Do no harm, cultivate goodness.",
  "Every ending is a new beginning.",
  "Wisdom is found in simplicity.",
  "Acceptance brings inner peace.",
  "Cultivate a compassionate heart.",
  "Cherish each moment, it's precious.",
  "Find balance in all things.",
  "Mindfulness heals the soul.",
  "In silence, find serenity.",
  "Compassion begins with oneself.",
  "The present moment is everything.",
  "Let love guide your actions.",
  "Peace comes from within.",
  "Live with kindness and gratitude.",
  "Practice patience, it's transformative.",
  "Embrace change with an open heart.",
  "Let go of judgment and prejudice.",
  "Act with loving-kindness.",
  "Cultivate a mind of clarity.",
  "Simplicity leads to inner peace.",
  "Acceptance liberates the mind.",
  "Compassion knows no boundaries.",
  "The journey is the destination.",
  "Embrace the interconnectedness of all.",
  "Be present, let go of distractions.",
  "Happiness lies in contentment.",
  "Find joy in selflessness.",
  "Cultivate inner peace through meditation.",
  "Gratitude opens doors to abundance.",
  "Embrace each experience as a teacher.",
  "In letting go, find freedom.",
  "Listen deeply, speak with kindness.",
  "Compassion creates harmony.",
  "Non-attachment leads to freedom.",
  "Live with mindful intention.",
  "Embrace simplicity, reject excess.",
  "Cultivate a heart of compassion.",
  "Flow like water, adapt to change.",
  "Embrace simplicity, find harmony.",
  "Follow nature's course, find peace."
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
