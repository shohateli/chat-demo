import { injectCSS } from "./assets";
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
    <div id="close-switch-model"><img src="./media/close.svg" height="32" width="32"></div>
  </div>

</div>`;

const STYLES = `
  .switch-model-container {
    display: none;
    position: absolute;
    top: -120px;
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
    background-color: white;
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
    color: #5e5969;
  }

  #close-switch-model {
    cursor: pointer;
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
    } else {
      container.classList.remove("active");
    }
  }
}
