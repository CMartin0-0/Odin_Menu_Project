export const home = () => {
  const content = document.createElement("div");
  content.classList.add("home");
  content.innerHTML = `
    <p class="home-title">The Berry Bar</p>
    <p class="home-description">- If a berry exists, we have a smoothy for it!</p>`;
  return content;
};
