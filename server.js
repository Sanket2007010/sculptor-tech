require('dotenv').config(); // MUST BE LINE 1
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

// Debugging line: This will print your key in the terminal (shorthand)
// so we can see if Node is actually reading it.
console.log("Checking API Key...");
if (!process.env.OPENAI_API_KEY) {
    console.error("❌ ERROR: API Key not found in .env file!");
} else {
    console.log("✅ API Key found: " + process.env.OPENAI_API_KEY.substring(0, 10) + "...");
}

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY, 
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
   const completion = await openai.chat.completions.create({
  model: "google/gemini-2.0-flash-exp:free", 
  messages: [
    { 
      role: "system", 
      content: "You are the AI assistant for Sculptor-Tech Pvt Ltd. Our official contact number is +91 8623034275. Our website is sculptor-tech.com. We specialize in Web Development and Digital Marketing for SMEs. If someone asks for contact details, provide these specific Indian contact details, not international ones." 
    },
    { role: "user", content: message }
  ],
});
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "AI is offline." });
  }
});

app.listen(5000, () => console.log(`🚀 Server running on http://localhost:5000`));