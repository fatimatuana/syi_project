const express = require('express');
const router = express.Router();

// static suggestions per weather condition
const suggestionsMap = {
    Clear: [
        "It's a beautiful day! Go for a walk or have a picnic.",
        "Perfect weather to read a book outside!",
        "Why not soak up the sun with a run or bike ride?",
        "Great day to meet friends outdoors or hit the park.",
        "Try a rooftop cafe or an open-air workout.",
        "Don't forget sunscreen — even if it feels mild!",
        "Open the windows and let the fresh air in!"
    ],
    Clouds: [
        "A cloudy day is great for a cozy coffee break.",
        "Stay indoors and work on a creative project.",
        "Take it easy and enjoy the calm vibe.",
        "A perfect day for journaling or reading indoors.",
        "Do something productive in your comfy clothes.",
        "Great mood for background music and focus time.",
        "Let the soft light set a calm tone for the day."
    ],
    Rain: [
        "Rainy days are perfect for a movie marathon!",
        "Don't forget your umbrella if you're heading out!",
        "Grab a warm drink and listen to the rain.",
        "Cozy up with a blanket and your favorite series.",
        "Try baking something — the smell is perfect for rainy weather.",
        "It is a great excuse to slow down and rest.",
        "If you're out, splash in some puddles for fun!"
    ],
    Snow: [
        "Stay warm! Maybe build a snowman or watch the snowfall.",
        "Perfect time for hot chocolate and a blanket!",
        "Be careful on the roads — it might be slippery.",
        "Go out for a short snow walk if it's safe.",
        "Capture the snowflakes — it's a photo-worthy day.",
        "Start a puzzle or craft project indoors.",
        "It is a good day to slow down and stay cozy inside."
    ],
    Default: [
        "Stay mindful and make today count!",
        "Do something small that makes you happy today.",
        "No matter the weather, you have got this!",
        "Take a moment to breathe and reset — you're doing great.",
        "Reach out to someone you care about today.",
        "A little progress is still progress — keep going!",
        "Use today as a chance to care for yourself in some way."
    ],
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

router.get('/', async function (req, res, next) {
  const weatherMain = req.query.weather || "Default";
  const suggestions = suggestionsMap[weatherMain] || suggestionsMap["Default"];
  res.send(getRandom(suggestions));
});

module.exports = router;