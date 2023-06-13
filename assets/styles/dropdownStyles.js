import { DARK_MODE, LIGHT_MODE } from "../colors";

export const DROPDOWN_STYLES = `
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
    padding: 0 15px;
    cursor: pointer;
  }

  .dropdown-data.open {
    flex-direction: column;
    padding: 8px 15px;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6px 0px;
    height: 15px;
    color: ${LIGHT_MODE.dropdownTextColor};
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${LIGHT_MODE.dropdownSelectedTextColor};
  }

  .dropdown-data h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  .dropdown-item h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }


  /* dark mode styles */
  .dropdown-data.dark {
    color: ${DARK_MODE.boxHighlighted};
    background-color: ${DARK_MODE.dropdownBackground};
  }

  .dropdown-item.dark {
    color: ${DARK_MODE.dropdownTextColor};
  }
  .dropdown-item.selected.dark {
    color: ${DARK_MODE.dropdownSelectedTextColor};
  }
`;
