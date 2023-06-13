import { COLORS } from "../colors";

const YELLOW_GRADIENT = 'linear-gradient(180deg,#ffcc89,#d8860b)';

export const DARK_MODE_TOGGLE_STYLES = `
  #darkmode-toggle-label {
    width: 70px;
    height: 28px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
    cursor: pointer;
  }

  #darkmode-toggle-label:after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 2px;
    left: 2px;
    background: ${YELLOW_GRADIENT};
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  }

  #darkmode-toggle {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  #darkmode-toggle:checked + label {
    background: #383838;
  }
  #darkmode-toggle:checked + label:after {
    left: 68px;
    transform: translateX(-100%);
    background: linear-gradient(180deg,#777,#3a3a3a);
  }
  label, label:after {
    transition: 0.3s
  }
  label:active:after{
    width: 36px;
  }

  .darkmode-toggle-container {
    display: flex;
    flex-direction: row;
    margin-top: 2px;
  }


  #darkmode-toggle-label svg {
    position: absolute;
    width: 16px;
    top: 6px;
    z-index: 100;
  }
  #darkmode-toggle-label svg.sun {
    left: 6px;
    fill:#fff;
    transition: 0.3s;
  }
  #darkmode-toggle-label svg.moon {
    left: 48px;
    fill:#7e7e7e;
    transition: 0.3s;
  }
  #darkmode-toggle:checked + #darkmode-toggle-label svg.sun {
    fill:#7e7e7e;
  }
  #darkmode-toggle:checked + #darkmode-toggle-label svg.moon {
    fill:#fff;
  }
`;
