require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const apiKey = process.env.YOUR_API_KEY; //

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/generateUserStory', async (req, res) => {
  const inputPrompt = req.body.inputPrompt;

  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: inputPrompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    }),
  });

  const data = await response.json();
  res.send(data.choices[0].text.trim());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
