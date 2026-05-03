const aiService = require('./services/aiService');

async function test() {
  console.log("Testing fallback EVM...");
  const res1 = await aiService.sendMessage("What is an EVM?");
  console.log(res1);

  console.log("Testing fallback ECI...");
  const res2 = await aiService.sendMessage("Tell me about the Election Commission");
  console.log(res2);

  console.log("Testing getTopicSummary...");
  const res3 = await aiService.getTopicSummary("Voter Registration");
  console.log(res3);
}

test();
