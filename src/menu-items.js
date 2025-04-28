export const menuItems = () => {
  const content = document.createElement("div");
  content.classList.add("menu");
  content.innerHTML = `
    <p class="menu-title">Menu</p>
    <p class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  return content;
}