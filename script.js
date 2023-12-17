// Define a list of questions for Prakruti assessment
const questions = [
    "What is your full name?", "Who choose your name?", "Where were you born?","Is that a city or a town?",
    "Do you have a favourite color", "How old are you?", "Your from?", "Which is your favorite food and why?", "Where do you currently live?",
    "What's your favorite song to sing in the shower?",
    "If you could have one super power what would it be?",
    "What's the worst pick-up line you've ever heard?",
    "What's the best joke you know?",
    "If you worked in a circus, what would your job be?",
    "What's your best dance move?",
    "What was your most embarrassing moment?",
    "What's your strangest quirk?",
    "If you could trade lives with any celeb, who would it be?",
    "What's the oddest food in your fridge?",
    "Do you think aliens exist on other planets?",
    "What's your weirdest guilty pleasure?",
    "What's movie scene never fails to make you laugh out loud?",
    "What's the most embarrassing thing that ever happened to you?",
    "If you could make up a holiday, what would it celebrate?",
    "Do you have a hidden talent?",
    "What's the silliest thing you've ever Googled?",
    "What old person habits do you have?",
    "What would the title of your memoir be?",
    // Add more questions here...
];
const audioSources = [
    "audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"
];
let currentQuestion = 0; // Initialize the current question index
// Get DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendSound = document.getElementById("sendSound");
const generateButton = document.getElementById("generateButton");

// Function to send a message to the chat
function sendMessage(sender, message, imageSrc, audioSrc) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    if (sender === "User") {
        messageDiv.id = "usermessage";
    }

    // Create an image element
    const senderImage = document.createElement("img");
    senderImage.src = imageSrc; // Set the image source
    senderImage.id = "botimg";

    // Create a message text element
    const messageText = document.createElement("span");
    messageText.innerHTML = message;

    const audioimg = document.createElement("img");
    audioimg.src = "volume2.png";
    audioimg.id = "play";
    if (sender === "User") {
        messageText.className = "user";
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(senderImage);
    }
    else {
        messageText.className = "bot";
        messageDiv.appendChild(senderImage);
        messageDiv.appendChild(messageText);
    }
    setTimeout(() => {
        if (sender != "User") {
            if (currentQuestion != 0) {
                messageDiv.appendChild(audioimg);
                function playmusic() {
                    let audio = new Audio(audioSrc);
                    audio.play();
                }
                audioimg.addEventListener("click", playmusic);
            }
        }
    }, 1000);
    // Append the image and message text to the message div

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle user's message
function handleUserMessage(word) {
    const userResponse = word;
    sendMessage("User", userResponse, "boyimage.jpeg"); // Replace "user-image.jpg" with the actual image source

    if (currentQuestion < questions.length) {
        const botResponse = questions[currentQuestion];
        const AudioRespose = audioSources[currentQuestion];
        setTimeout(() => sendMessage("Chatbot", botResponse, "boticon2.jpeg", AudioRespose), 1000); // Replace "chatbot-image.jpg" with the actual image source
        currentQuestion++;
        sendSound.play();
    } else {
        // Assessment complete
        const finalResponse = "Based on your responses, your Prakruti type is [Prakruti Type].";
        sendMessage("Chatbot", finalResponse, "boticon2.jpeg"); // Replace "chatbot-image.jpg" with the actual image source
        userInput.disabled = true; // Disable input after assessment
    }
    userInput.value = ""; // Clear user input
}
function usermeassage() {
    if (!(userInput.value === "")) {

        const userResponse = userInput.value;
        sendMessage("User", userResponse, "boyimage.jpeg"); // Replace "user-image.jpg" with the actual image source

        if (currentQuestion < questions.length) {
            const botResponse = questions[currentQuestion];
            const AudioRespose = audioSources[currentQuestion];
            setTimeout(() => sendMessage("Chatbot", botResponse, "boticon2.jpeg", AudioRespose), 1000); // Replace "chatbot-image.jpg" with the actual image source
            currentQuestion++;
            sendSound.play();
        } else {
            // Assessment complete
            const finalResponse = "Based on your responses, your Prakruti type is [Prakruti Type].";
            sendMessage("Chatbot", finalResponse, "boticon2.jpeg"); // Replace "chatbot-image.jpg" with the actual image source
            userInput.disabled = true; // Disable input after assessment
        }

        userInput.value = "";
    }// Clear user input
}

// Attach click event listener to the button
userInput.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        handleUserMessage(e.target.value);
    }
});

generateButton.addEventListener("click", usermeassage);
// Initial message from the chatbot
sendMessage("Chatbot", "Welcome to the Chat With Me Chatbot. Let's get started with ---'Hi'", "boticon2.jpeg"); // Replace "chatbot-image.jpg" with the actual image source
