// netlify-functions/chat.js

exports.handler = async function(event) {
  try {
    const { messages } = JSON.parse(event.body);

    // Call the new Responses API on GPT-4.1
    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        input: messages
      })
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.error?.message || resp.statusText);
    }

    // data.output_text holds the reply
    return {
      statusCode: 200,
      body: JSON.stringify({
        assistant: data.output_text
      })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
