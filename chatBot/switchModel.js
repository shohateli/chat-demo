
import { COLORS, DARK_MODE, LIGHT_MODE } from "../assets/colors";
import { getImageFromSvgText, CLOSE_POPUP_ICON } from "../assets/icons";
import { injectCSS } from "../assets/styles/styles";
import { SWITCH_MODEL_STYLES } from "../assets/styles/switchModelStyles";
import Dropdown from "./dropdown";

const MODELS = [
  'Faster but less accurate 3.5',
  'Slower but more accurate 3.5',
  'Fast but less accurate 3.5',
];

const SWITCH_MODEL_HTML = `<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${CLOSE_POPUP_ICON}</div>
  </div>
</div>
<div class="arrow-down"/>
`;

export class SwitchModel {
  constructor() {
    this.switchModelContainer = document.createElement("div");
    this.switchModelContainer.innerHTML = SWITCH_MODEL_HTML;
    this.switchModelContainer.classList.add("switch-model-container");

    this.showSwitchModel = false;

    this.current = MODELS[0];
  }

  addSwitchModel() {
    // const container = document.getElementById("send-form-container");
    const container = document.getElementById("switch-model-relative-container");
    container.prepend(this.switchModelContainer);

    const dropdown = new Dropdown(MODELS, "switch-model", this.current);

    injectCSS(SWITCH_MODEL_STYLES);
  }

  setUpListeners() {
    this.addSwitchModel();

    const boxIcon = document.getElementById("box-button");
    const closeIcon = document.getElementById("close-switch-model");
    boxIcon.addEventListener('click', e => this.toggleShowSwitchModel());
    closeIcon.addEventListener('click', e => this.toggleShowSwitchModel(true));
  }

  toggleShowSwitchModel(alwaysClose=false) {
    this.showSwitchModel = !this.showSwitchModel;
    const container = document.getElementsByClassName("switch-model-container")[0];

    if ((this.showSwitchModel && !alwaysClose) || !container.classList.contains("active")) {
      container.classList.add("active");
      toggleBoxIcon("open");
    } else {
      container.classList.remove("active");
      toggleBoxIcon('close');
    }
  }
}

export function toggleBoxIcon(openOrClose="close") {
  const boxImages = document.getElementsByClassName("box-icon");
  Array.from(boxImages).forEach(boxImage => {
    if (openOrClose === "open") boxImage.classList.add('selected');
    else boxImage.classList.remove('selected');
  })
}
