import { DARK_MODE, LIGHT_MODE } from "../colors";

export const ICON_STYLES = `
  .send-icon {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .box-icon {
    fill: ${LIGHT_MODE.boxMuted};
  }
  .box-icon.selected {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .close-popup-icon {
    fill: ${LIGHT_MODE.closePopupColor}
  }

  .checkmark-icon {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .down-icon {
    fill: ${LIGHT_MODE.responseTextColor}
  }


  /* dark mode stuff */
  .send-icon.dark {
    fill: ${DARK_MODE.boxHighlighted};
  }

  .box-icon.dark {
    fill: ${DARK_MODE.boxMuted};
  }
  .box-icon.selected.dark {
    fill: ${DARK_MODE.boxHighlighted};
  }

  .close-popup-icon.dark {
    fill: ${DARK_MODE.closePopupColor}
  }

  .checkmark-icon.dark {
    fill: ${DARK_MODE.boxHighlighted};
  }

  .down-icon.dark {
    fill: ${DARK_MODE.responseTextColor}
  }
`;
