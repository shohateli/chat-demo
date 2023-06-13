import { DARK_MODE, LIGHT_MODE } from "../colors";
// top: -108px;

export const SWITCH_MODEL_STYLES = `
  .switch-model-container {
    display: none;
    position: absolute;
    bottom: -1px;
    width: 100%;
  }

  .switch-model-container.active {
    display: flex;
    animation:scale-up-bottom 0.2s;
  }

  .switch-model {
    width: 409px;
    margin: 0 auto;
    border-radius: 12px;
    padding: 18px 15px;
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
    align-items: flex-start;
  }
  .switch-model-header h4 {
    margin: 0px;
    padding: 0px;
    margin-left: 10px;
    color: ${LIGHT_MODE.responseTextColor};
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  #close-switch-model {
    cursor: pointer;
  }

  .arrow-down {
    position: absolute;
    right: 44px;
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


  /* dark mode styles */
  .switch-model.dark {
    background-color: ${DARK_MODE.popupBackgroundColor};
  }

  .switch-model-header h4.dark {
    color: ${DARK_MODE.responseTextColor};
  }

  .arrow-down.dark {
    border-top: 15px solid ${DARK_MODE.popupBackgroundColor};
  }
`;
