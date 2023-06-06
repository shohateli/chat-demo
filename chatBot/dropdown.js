import { COLOR } from "../assets/colors";
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
    color: ${COLOR};

    display: flex;
    background-color: #ededef;
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
    color: #706c79;
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${COLOR};
  }
  .dropdown-item h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 400;
  }

  .dropdown-data::-webkit-scrollbar {
    background-color: #ededef;
    border-radius: 12px;
  }
  .dropdown-data::-webkit-scrollbar-thumb {
    background-color: #9f69fd;
    border-radius: 12px;
    border: 2px solid #ededef;
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
        <svg fill="black" height="15" width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
      </div>
    </div>`;
  }

  expand() {
    const dropdownData = document.getElementsByClassName('dropdown-data')[0];
    dropdownData.classList.remove("closed");
    dropdownData.classList.add("open");

    const items = this.items.map((item) => {
      return `<div class="dropdown-item${item === this.current ? ' selected' : ''}">
        <h4>${item}</h4>
        <span>
          ${item === this.current ? `
          <svg fill="${COLOR}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
          ` : ''}
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
  }
}

export default Dropdown;
