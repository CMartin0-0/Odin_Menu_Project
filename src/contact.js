export const contact = () => {
  const content = document.createElement("div");
  content.classList.add("contact");
  content.innerHTML = `
    <p class="contact-title">Contact us for all your berry needs</p>
    <p class="contact-description">Berry Bartender</br>Phone #: 555-5555</br>Email: berryrealemail@email.com</p>`;
  return content;
};

