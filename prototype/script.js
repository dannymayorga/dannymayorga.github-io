async function generateUserStory(prompt) {
    const apiKey = "your_api_key_here"; // Replace with your API key
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5,
      }),
    });
  
    const data = await response.json();
    return data.choices[0].text.trim();
  }
  
  document.getElementById("userStoryForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const inputPrompt = document.getElementById("inputPrompt").value;
  
    const userStory = await generateUserStory(inputPrompt);
  
    document.getElementById("output").innerHTML = `<h2>Generated User Story</h2><p>${userStory}</p>`;
  });
  