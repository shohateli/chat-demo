const SWITCH_MODEL_HTML = `<div class="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model"><img src="./media/close.svg" height="32" width="32"></div>
  </div>

  <div></div>
</div>`;

const STYLES = `
  .switch-model-container {
    display: none;
    position: absolute;
    top: -110px;
    height: 130px;
    width: 100%;
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
  }

  .switch-model-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .switch-model-header h4 {
    margin: 0px;
    padding: 0px;
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
  }

  addSwitchModel() {
    const container = document.getElementById("send-form-container");
    container.prepend(this.switchModelContainer);

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

    if (this.showSwitchModel && !alwaysClose) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  }
}

const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};
