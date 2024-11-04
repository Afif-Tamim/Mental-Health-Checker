const slideValue = document.querySelector("span")
const inputSlider = document.querySelector("input")
const submit = document.querySelector("button");

inputSlider.addEventListener("input", () => {
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = ((value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100 + "%";
    slideValue.classList.add("show");
    inputSlider.style.background = `linear-gradient(to right, #112450 ${((value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100}%, #ddd ${((value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100}%)`;
});


inputSlider.addEventListener("blur", () => {
    slideValue.classList.remove("show");
});


var positiveText = [
    "You're shining bright today! Keep spreading that positive energy!",
    "Embrace this wonderful feeling, today is yours to conquer!",
    "Your happiness is contagious! Share it with the world and inspire others!",
    "Your positive vibes are inspiring, keep shining!",
    "Today is a beautiful day to celebrate your happiness!",
    "You’re radiating joy, let that light guide you!",
    "Your enthusiasm is infectious, spread it wherever you go!",
    "Feeling great? You deserve all the good things life has to offer!",
    "Cherish this moment of happiness and let it fuel your journey!",
    "You’re on top of the world today, enjoy every second!"
]


var motivationalText = [
    "Every step you take, no matter how small, is a step towards achieving your dreams.",
    "Believe in yourself and your abilities; you've got the strength to overcome any challenge!",
    "Remember, the journey may be tough, but each challenge brings you closer to your goals!",
    "Success is the sum of small efforts repeated day in and day out.",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
    "Your potential is limitless; don’t be afraid to chase your dreams!",
    "Every setback is a setup for a comeback; keep pushing forward!",
    "You are capable of amazing things; believe in yourself!",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The future belongs to those who believe in the beauty of their dreams."
]

var breathingText = [
    "Take a moment to breathe deeply: inhale for 4 seconds, hold for 4 seconds, and exhale for 6 seconds. Repeat this a few times to center yourself."
]



const textArea = document.getElementById("text-here");
const moodArea = document.getElementById("mood-type");
submit.addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    let value = inputSlider.value;
    if (value < 4) {
        moodArea.innerHTML = "Looks like your feeling good! </br></br>";
        moodArea.innerHTML += "Here's a positive quote. ";
        textArea.innerHTML = positiveText[randomNumber - 1];
    } else if (value >= 4 && value <= 6) {
        moodArea.innerHTML = "Looks like your feeling a bit neutral. </br></br>";
        moodArea.innerHTML += "Here's a motivational quote.";
        textArea.innerHTML = motivationalText[randomNumber - 1];
    } else {
        moodArea.innerHTML = "Looks like your feeling pretty sad! </br></br>";
        moodArea.innerHTML += "Here's a motivational quote and a breathing exercise to help. ";

        textArea.innerHTML = breathingText[0] + "<br><br>";
        textArea.innerHTML += motivationalText[randomNumber - 1];
    }
});

function showAnswer() {
    document.querySelector(".final-result").style.display = 'block';
    document.getElementById("answer").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("restart").addEventListener("click", function () {
    location.reload();
});
