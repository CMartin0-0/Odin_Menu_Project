export const contact = () => {
  const content = document.createElement("div");
  content.classList.add("contact");
  content.innerHTML = `
    <p class="contact-title">Contact Us</p>
    <p class="contact-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  return content;
};

