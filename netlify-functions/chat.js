// netlify-functions/chat.js
exports.handler = async function(event) {
  try {
    const { messages } = JSON.parse(event.body);

    // Call the Chat Completions API directly
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1",               // use GPT-4.1 here
        messages: [
          { role: "system",  content: process.env.SYSTEM_PROMPT },
          ...messages                  // your user+assistant history
        ]
      })
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error?.message || resp.statusText);

    // Pull the assistant’s reply out of the first choice
    const reply = data.choices[0].message.content;
    return {
      statusCode: 200,
      body: JSON.stringify({ assistant: reply })
    };

  } catch (err) {
    console.error("Chat error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

