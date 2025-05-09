
import OpenAI from "openai";

export async function handler(event) {
  try {
    const { messages } = JSON.parse(event.body);
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // Use the Responses API per OpenAI quickstart
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: messages
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ output: response.output_text })
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
