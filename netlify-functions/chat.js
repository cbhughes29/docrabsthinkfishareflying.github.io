// netlify-functions/chat.js

exports.handler = async (event) => {
  try {
    const { messages } = JSON.parse(event.body);

    // dynamic import of the ESM-only OpenAI package
    const { default: OpenAI } = await import("openai");

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // use the Responses API as in the quickstart
    const response = await client.responses.create({
      model: "gpt-4.1",       // or "gpt-3.5-turbo"
      input: messages
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ assistant: response.output_text })
    };

  } catch (err) {
    console.error("Chat function error", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
