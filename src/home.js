export const home = () => {
  const content = document.createElement("div");
  content.classList.add("home");
  content.innerHTML = `
    <p class="home-title">The food restaurant</p>
    <p class="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  return content;
};
