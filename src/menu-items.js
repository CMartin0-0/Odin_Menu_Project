export const menuItems = () => {
  const content = document.createElement("div");
  content.classList.add("menu");
  content.innerHTML = `
    <p class="menu-title">Smoothies On Tap</p>
    <div id="menu-container">
      <div class="menu-item">
        <p class="menu-item-name">Berry Blast</p>
        <p class="menu-item-description">A blend of strawberries, blueberries, and raspberries.</p>
        <div class="berry-smoothie"></div>
        <div class="glass-stem"></div>
        <div class="glass-base"></div>
      </div>
      <div class="menu-item">
        <p class="menu-item-name">Tropical Paradise</p>
        <p class="menu-item-description">Mango, pineapple, and coconut for a taste of the tropics.</p>
        <div class="tropical-smoothie"></div>
        <div class="glass-stem"></div>
        <div class="glass-base"></div>
      </div>
      <div class="menu-item">
        <p class="menu-item-name">Green Goddess</p>
        <p class="menu-item-description">Spinach, kale, and green apple for a healthy boost.</p>
        <div class="green-smoothie"></div>
        <div class="glass-stem"></div>
        <div class="glass-base"></div>
      </div>
      <div class="menu-item">
        <p class="menu-item-name">Chocolate Delight</p>
        <p class="menu-item-description">Chocolate, banana, and almond milk for a sweet treat.</p>
        <div class="chocolate-smoothie"></div>
        <div class="glass-stem"></div>
        <div class="glass-base"></div>
      </div>
    </div>`;

  return content;
}