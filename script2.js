// DOM Elements
const messages = document.getElementById('messages');
const form = document.getElementById('chat-form');
const input = document.getElementById('msg-input');

// Predefined responses
const predefinedResponses = {
    "hi": "Hi Surya! How can I assist you?",
    "hello": "Hi Surya! How can I assist you?",
    "what is 2 + 2?": "LOL!! its 4",
    "who are you?": "I'm your friendly chat assistant!",
    "what is your name?": "You can call me ChatBot.",
    "bye": "Goodbye! Have a great day!",
};

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the user's message
    const message = input.value.trim().toLowerCase();
    if (!message) return;

    // Add the user's message to the chat
    addMessage(input.value, 'self');

    // Generate a bot reply
    setTimeout(() => {
        const reply = predefinedResponses[message] || "Sorry, I didn't understand that. Could you rephrase?";
        addMessage(reply, 'bot');
    }, 1000);

    // Clear the input field
    input.value = '';
});

// Function to add a message to the chat
function addMessage(text, sender) {
    const li = document.createElement('li');
    li.textContent = text;
    li.className = sender === 'self' ? 'self' : '';
    messages.appendChild(li);

    // Auto-scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
}
