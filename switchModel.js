import { injectCSS } from "./assets";
import Dropdown from "./dropdown";

const MODELS = [
  'model1',
  'model2',
  'model3',
  'model4',
];

const CLOSE_ICON = `<svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="#b1a8c0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z"></path></g></g></svg>`
// '<img src="./media/close.svg" height="32" width="32">'

const SWITCH_MODEL_HTML = `<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${CLOSE_ICON}</div>
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
