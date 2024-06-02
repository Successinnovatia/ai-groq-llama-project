const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an AI tutor that answers questions, explains machine learning algorithms, and guides users through their learning journey.",

          role: "user",
          content: "What is machine learning.",
        },
      ],
      model: "llama3-8b-8192",
    });

    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
  } catch (error) {
    console.error("Error during chat completion:", error);
  }
}

main();
// const main = async () => {

// }
