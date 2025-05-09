// netlify-functions/chat.js
exports.handler = async function(event) {
  try {
    const { messages } = JSON.parse(event.body);

    // Call OpenAI REST API directly
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: process.env.SYSTEM_PROMPT },
          ...messages
        ]
      })
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.error?.message || resp.statusText);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        assistant: data.choices[0].message.content
      })
    };
  } catch (err) {
    console.error("Function error", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
