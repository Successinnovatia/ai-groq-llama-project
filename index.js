const Groq = require("groq-sdk");
require("dotenv").config();
const readline = require("readline");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: ",
});

async function answerQuestion(userInput) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an AI tutor that answers questions, explains machine learning algorithms, and guides users through their learning journey.",

          role: "user",
          content: userInput,
        },
      ],
      model: "llama3-8b-8192",
    });

    console.log(`AI: ${chatCompletion.choices[0]?.message?.content || ""}`);
  } catch (error) {
    console.error("Error during chat completion:", error);
  }
}

console.log(
  "Welcome to your personal AI tutor, feel free to ask any question on machine learning or type EXIT to close the chat"
);

rl.prompt();

rl.on("line", async (line) => {
  const userInput = line.trim();

  if (userInput.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  await answerQuestion(userInput);
  rl.prompt();
}).on("close", () => {
  console.log("Session ended.");
  process.exit(0);
});
