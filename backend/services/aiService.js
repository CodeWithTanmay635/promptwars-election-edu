const Anthropic = require('@anthropic-ai/sdk');

let client = null;
if (process.env.ANTHROPIC_API_KEY) {
  client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });
}

const SYSTEM_PROMPT = `You are VoteBot - an Election Education Assistant for Indian citizens.
Explain elections simply. Cover ECI, EVM, VVPAT, NOTA, Lok Sabha.
Keep answers under 80 words. Be non-partisan. End with a follow-up question.`;

async function sendMessage(message, history = []) {
  try {
    if (!client) {
      throw new Error('ANTHROPIC_API_KEY not set');
    }

    // Format history for Anthropic (user, assistant)
    let messages = [];
    history.slice(-8).forEach(h => {
      let role = (h.role === 'model' || h.role === 'assistant') ? 'assistant' : 'user';
      let content = '';
      if (h.parts && Array.isArray(h.parts)) {
        content = h.parts.map(p => p.text).join(' ');
      } else {
        content = h.content || h.text || '';
      }
      if (content.trim()) {
        messages.push({ role, content });
      }
    });

    messages.push({ role: 'user', content: message });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages
    });

    return { reply: response.content[0].text };
  } catch (err) {
    console.error('AI Error:', err.message);
    return { reply: 'VoteBot is unavailable right now. Please try again in a moment.' };
  }
}

async function getTopicSummary(topic) {
  return await sendMessage(`Please provide a concise educational summary for the Indian election topic: ${topic}`);
}

module.exports = { sendMessage, getTopicSummary };
