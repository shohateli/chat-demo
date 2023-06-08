
import { COLORS, DARK_MODE, LIGHT_MODE } from "../assets/colors";
import { getImageFromSvgText, CLOSE_POPUP_ICON } from "../assets/icons";
import { injectCSS } from "../assets/styles";
import Dropdown from "./dropdown";

const MODELS = [
  'model1',
  'model2',
  'model3',
  'model4',
];

const SWITCH_MODEL_HTML = `<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${CLOSE_POPUP_ICON}</div>
  </div>
</div>
<div class="arrow-down"/>
`;

const STYLES = `
  .switch-model-container {
    display: none;
    position: absolute;
    top: -108px;
    height: 130px;
    width: 100%;
  }

  .switch-model-container.expand {
    top: -190px;
    height: 200px;
  }

  .switch-model-container.active {
    display: flex;
    animation:scale-up-bottom 0.2s;
  }

  .switch-model {
    width: 95%;
    margin: 0 auto;
    border-radius: 12px;
    padding: 20px 20px;
    background-color: ${LIGHT_MODE.popupBackgroundColor};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .switch-model-header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .switch-model-header h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 500;
    margin-left: 10px;
    color: ${LIGHT_MODE.responseTextColor};
  }

  #close-switch-model {
    cursor: pointer;
  }

  .arrow-down {
    position: absolute;
    right: 35px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid ${LIGHT_MODE.popupBackgroundColor};
  }

  @keyframes scale-up-bottom{
    0%{
      transform:scale(.5);
      transform-origin:center bottom;
    }
    100%{
      transform:scale(1);
      transform-origin:center bottom;
    }
  }

  @media (prefers-color-scheme: dark) {
    .switch-model {
      background-color: ${DARK_MODE.popupBackgroundColor};
    }

    .switch-model-header h4 {
      color: ${DARK_MODE.responseTextColor};
    }

    .arrow-down {
      border-top: 15px solid ${DARK_MODE.popupBackgroundColor};
    }
  }
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
    const container = document.getElementById("send-form-container");
    container.prepend(this.switchModelContainer);

    const dropdown = new Dropdown(MODELS, "switch-model", this.current);

    injectCSS(STYLES);
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
