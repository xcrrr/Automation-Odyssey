#!/usr/bin/env node

/**
 * Optimized for "cheap, short questions"
 * - Uses the standard 'sonar' model
 * - Minimal system prompt
 * - No conversation history
 * - Short completion limit
 */

const args = process.argv.slice(2);
const query = args.join(" ");

if (!query) {
  console.error("Usage: fast_ask.mjs <query>");
  process.exit(1);
}

const apiKey = process.env.PERPLEXITY_API_KEY;
if (!apiKey) {
  console.error("Error: PERPLEXITY_API_KEY environment variable not set");
  process.exit(1);
}

async function ask(query) {
  const response = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [
        { role: "system", content: "Be extremely concise. Answer in 1-2 sentences max." },
        { role: "user", content: query }
      ],
      max_tokens: 150
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Perplexity API error (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

ask(query)
  .then(answer => console.log(answer))
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
