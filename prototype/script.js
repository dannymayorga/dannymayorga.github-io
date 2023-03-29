document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector("#submit");
  const outputPane = document.querySelector(".output-pane");

  submitBtn.addEventListener("click", async function (event) {
    event.preventDefault();

    const longForm = document.querySelector("#long-form").value;
    const shortForm = document.querySelector("#short-form").value;

    try {
      const response = await fetch(`/generate-content?longForm=${encodeURIComponent(longForm)}&shortForm=${encodeURIComponent(shortForm)}`);

      const data = await response.json();

      if (data && data.choices && data.choices.length > 0) {
        const aiGeneratedContent = data.choices[0].text;
        outputPane.innerHTML = aiGeneratedContent;
      } else {
        handleError("Error: Unable to generate content.");
      }
    } catch (error) {
      handleError("Error fetching ChatGPT:", error);
    }
  });
});

function handleError(message, error) {
  console.error(message, error);
  // You can add additional error handling logic here, such as displaying an error message to the user.
}
