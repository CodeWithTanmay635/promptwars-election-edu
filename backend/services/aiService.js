const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

let ai = null;
try {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
} catch (e) {
  console.warn("Gemini API Key missing or invalid. Will fall back to demo mode.");
}

const SYSTEM_PROMPT = `You are VoteBot — an Election Education Assistant for Indian citizens, built for PromptWars 2026.

ROLE: Help users understand the Indian election process clearly, accurately, and in a friendly tone.

KNOWLEDGE BASE:
- Election Commission of India (ECI) — constitutional body
- Lok Sabha (543 seats), Rajya Sabha, Vidhan Sabha elections
- Electronic Voting Machines (EVM) + VVPAT paper trail
- NOTA — None Of The Above option
- Model Code of Conduct (MCC) — activated on announcement
- Voter registration — Form 6, age 18+, Voter ID / Aadhaar
- Election phases: Announcement → Nomination → Campaign → Poll → Count → Result
- Right to Information (RTI) for election grievances

RESPONSE RULES:
1. Answer in under 80 words unless user asks "explain in detail"
2. Use simple language — imagine explaining to a first-time voter
3. Always be non-partisan — never favor any party or candidate
4. If asked about specific candidates or parties: "I only explain processes, not politics"
5. End each answer with one follow-up question to keep learning going
6. For Hindi questions: respond in Hindi
7. Use bullet points for step-by-step processes

TONE: Friendly, encouraging, like a helpful civics teacher.`;

const FALLBACK_MAP = {
  default: "I'm currently running in offline demo mode and don't understand that question. Try asking about EVMs, Voter Registration, NOTA, or Counting!",
  evm: "EVM stands for Electronic Voting Machine, used in Indian elections to cast votes safely and securely. It is accompanied by VVPAT (Voter Verifiable Paper Audit Trail) so you can verify your vote.",
  registration: "To register to vote, you must be an Indian citizen, 18 years or older, and fill out Form 6. You can do this online via the Voter Helpline App or the ECI portal.",
  eci: "The Election Commission of India (ECI) is the constitutional body responsible for administering elections in India freely and fairly.",
  who: "Every Indian citizen who is 18 years of age or older on the qualifying date is eligible to vote, provided they are enrolled in the electoral roll and not disqualified by law.",
  counting: "Vote counting is done under strict security. EVMs from all polling booths are brought to a counting center where ECI officials and candidate representatives oversee the tabulation.",
  nota: "NOTA stands for 'None of the Above'. It allows a voter to reject all candidates in their constituency, though it does not invalidate the election even if it gets the most votes.",
  booth: "You can find your polling booth by checking your Voter Slip or by searching your details on the official ECI portal (electoralsearch.in).",
  rules: "The Model Code of Conduct (MCC) is a set of rules for political parties and candidates to ensure fair elections. It comes into force as soon as elections are announced.",
  results: "Election results are declared immediately after the counting process concludes. The ECI publishes these officially, and the successful candidate receives a certificate of election."
};

const LOG_FILE = path.join(__dirname, '../ai_requests.log');

const logRequest = (message, status) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Status: ${status} | Message: ${message}\n`;
  try {
    fs.appendFileSync(LOG_FILE, logEntry);
  } catch (err) {
    console.error("Failed to write to log file", err);
  }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getFallbackResponse = (message) => {
  if (!message) return FALLBACK_MAP.default;
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('who can vote') || lowerMsg.includes('voter info') || lowerMsg.includes('eligible')) return FALLBACK_MAP.who;
  if (lowerMsg.includes('evm') || lowerMsg.includes('machine')) return FALLBACK_MAP.evm;
  if (lowerMsg.includes('register') || lowerMsg.includes('registration') || lowerMsg.includes('form 6')) return FALLBACK_MAP.registration;
  if (lowerMsg.includes('eci') || lowerMsg.includes('commission')) return FALLBACK_MAP.eci;
  if (lowerMsg.includes('count')) return FALLBACK_MAP.counting;
  if (lowerMsg.includes('nota')) return FALLBACK_MAP.nota;
  if (lowerMsg.includes('booth') || lowerMsg.includes('where to vote')) return FALLBACK_MAP.booth;
  if (lowerMsg.includes('rule') || lowerMsg.includes('conduct')) return FALLBACK_MAP.rules;
  if (lowerMsg.includes('result')) return FALLBACK_MAP.results;
  
  return FALLBACK_MAP.default;
};

const sendMessage = async (message, history = []) => {
  logRequest(message, 'RECEIVED');
  
  let trimmedHistory = history.slice(-10).map(h => {
    const role = (h.role === 'model' || h.role === 'assistant') ? 'model' : 'user';
    let content = '';
    if (h.parts && Array.isArray(h.parts)) {
      content = h.parts.map(p => p.text).join(' ');
    } else {
      content = h.content || h.text || '';
    }
    return { role, parts: [{ text: content }] };
  });

  const fullContent = [
    { role: 'user', parts: [{ text: "SYSTEM INSTRUCTIONS: " + SYSTEM_PROMPT + "\n\nNow, respond to my messages based on these instructions." }] },
    { role: 'model', parts: [{ text: "Understood. I am VoteBot, and I am ready to help." }] },
    ...trimmedHistory,
    { role: 'user', parts: [{ text: message }] }
  ];

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      if (!ai || !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
          throw new Error("Missing or invalid Gemini API Key");
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullContent,
      });

      logRequest(message, 'SUCCESS');
      return {
        reply: response.text,
        sources: ["Election Commission of India Guidelines"]
      };

    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < 2) {
        await delay(1000);
      } else {
        logRequest(message, 'FAILED');
        return {
          reply: getFallbackResponse(message),
          sources: []
        };
      }
    }
  }
};

const getTopicSummary = async (topic) => {
  return await sendMessage(`Please provide a summary for the election topic: ${topic}`);
};

module.exports = {
  sendMessage,
  getTopicSummary
};
