import { COLORS, DARK_MODE, LIGHT_MODE } from "../assets/colors";
import { CHECKMARK_ICON, DOWN_ICON, getImageFromSvgText } from "../assets/icons";
import { injectCSS } from "../assets/styles/styles";
import { DROPDOWN_STYLES } from "../assets/styles/dropdownStyles";
import { toggleBoxIcon } from "./switchModel";
import { addDarkClass } from "../assets/messageBubble";

class Dropdown {
  constructor(items, containerId, current=null) {
    this.items = items;
    this.current = current;
    this.container = document.getElementById(containerId);

    if (!this.current) this.current = items[0];

    this.show();
    injectCSS(DROPDOWN_STYLES);
  }

  show() {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.innerHTML = this.html();
    dropdownContainer.classList.add("dropdown-container");

    dropdownContainer.addEventListener('click', (e) => {
      // Expand gets triggered on change so this stops it from running
      this.justChanged ? this.justChanged = false : this.expand();
    });

    this.container.appendChild(dropdownContainer);
  }

  html() {
    return `<div class="dropdown">
      <div class="dropdown-data closed ${addDarkClass()}">
        <h4>${this.current}</h4>
        ${DOWN_ICON()}
      </div>
    </div>
    `;
  }

  expand() {
    const dropdownData = document.getElementsByClassName('dropdown-data')[0];
    dropdownData.classList.remove("closed");
    dropdownData.classList.add("open");

    const items = this.items.map((item) => {
      return `<div class="dropdown-item${item === this.current ? ' selected' : ''} ${addDarkClass()}">
        <h4>${item}</h4>
        <span>
          ${item === this.current ? CHECKMARK_ICON() : ''}
        </span>
      </div>`;
    });

    dropdownData.innerHTML = items.join('');

    const switchModelContainer = document.getElementsByClassName("switch-model-container")[0];
    switchModelContainer.classList.add("expand");

    const itemsHTML = document.querySelectorAll(".dropdown-item");
    itemsHTML.forEach(item => {
      item.addEventListener('click', (e) => {
        const nestedText = item.querySelector('h4').textContent;
        this.current = nestedText;
        this.close();
      });
    });
  }

  close() {
    const switchModelContainer = document.getElementsByClassName("switch-model-container")[0];
    switchModelContainer.classList.remove("expand");

    const dropDownContainer = document.getElementsByClassName("dropdown-container")[0];
    this.container.removeChild(dropDownContainer);

    this.justChanged = true; // Expand gets triggered on change so this stops it from running
    this.show();

    // Closes the open cube1 popup
    const container = document.getElementsByClassName("switch-model-container")[0];
    container.classList.remove("active");

    toggleBoxIcon("close");
  }
}

export default Dropdown;
