import { COLORS, DARK_MODE, LIGHT_MODE } from "../assets/colors";
import { getBoxIcon, getCheckmarkIcon, getDownIcon, getImageFromSvgText } from "../assets/icons";
import { injectCSS } from "../assets/styles";

const STYLES = `
  .dropdown-container {
    margin-top: 10px;
    width: 100%;
  }

  .dropdown {
    width: 100%;
    border-radius: 12px;
  }

  .dropdown-data {
    width: 100%;
    color: ${LIGHT_MODE.boxHighlighted};

    display: flex;
    background-color: ${LIGHT_MODE.dropdownBackground};
    border-radius: 12px;
  }

  .dropdown-data.closed {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding: 0 20px;
    cursor: pointer;
  }

  .dropdown-data.open {
    flex-direction: column;
    height: 130px;
    overflow-y: scroll;
    padding: 5px 0px;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: ${LIGHT_MODE.dropdownTextColor};
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${LIGHT_MODE.dropdownSelectedTextColor};
  }
  .dropdown-item h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 400;
  }

  .dropdown-data::-webkit-scrollbar {
    background-color: ${LIGHT_MODE.dropdownBackgroundColor};
    border-radius: 12px;
    width: 7px;
  }
  .dropdown-data::-webkit-scrollbar-thumb {
    background-color: ${LIGHT_MODE.boxHighlighted};
    border-radius: 12px;
    border: 2px solid ${LIGHT_MODE.dropdownBackgroundColor};
  }

  @media (prefers-color-scheme: dark) {
    .dropdown-data {
      color: ${DARK_MODE.boxHighlighted};
      background-color: ${DARK_MODE.dropdownBackground};
    }

    .dropdown-item {
      color: ${DARK_MODE.dropdownTextColor};
    }
    .dropdown-item.selected {
      color: ${DARK_MODE.dropdownSelectedTextColor};
    }

    .dropdown-data::-webkit-scrollbar {
      background-color: ${DARK_MODE.dropdownBackgroundColor};
      border-radius: 12px;
      width: 7px;
    }
    .dropdown-data::-webkit-scrollbar-thumb {
      background-color: ${DARK_MODE.boxHighlighted};
      border-radius: 12px;
      border: 2px solid ${DARK_MODE.dropdownBackgroundColor};
    }
  }
`;

class Dropdown {
  constructor(items, containerId, current=null) {
    this.items = items;
    this.current = current;
    this.container = document.getElementById(containerId);

    if (!this.current) this.current = items[0];

    this.show();
    injectCSS(STYLES);
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
      <div class="dropdown-data closed">
        <h4>${this.current}</h4>
        ${getDownIcon(COLORS.responseTextColor)}
      </div>
    </div>
    `;
  }

  expand() {
    const dropdownData = document.getElementsByClassName('dropdown-data')[0];
    dropdownData.classList.remove("closed");
    dropdownData.classList.add("open");

    const items = this.items.map((item) => {
      return `<div class="dropdown-item${item === this.current ? ' selected' : ''}">
        <h4>${item}</h4>
        <span>
          ${item === this.current ? getCheckmarkIcon(COLORS.boxHighlighted) : ''}
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

    const boxImage = document.getElementById("box-image");
    boxImage.src = getImageFromSvgText(getBoxIcon(COLORS.boxMuted));
  }
}

export default Dropdown;
