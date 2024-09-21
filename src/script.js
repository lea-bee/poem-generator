function displayPoem(response) {
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "et9o12f3b1437b5dda065b3e80a5ef38";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem  and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate an Afrikaans poem about ${promptInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-box");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an Afrikaans poem about ${promptInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
