const MAIN_COLOR = "#a16dfd"

export const LIGHT_MODE = {
  defaultColor: MAIN_COLOR,
  backgroundColor: 'white',
  borderColor: '#E8E8E8',

  questionBackgroundColor: MAIN_COLOR,
  questionTextColor: 'white',
  responseBackgroundColor: '#EDEDEF',
  responseTextColor: '#5F5968',

  popupBackgroundColor: 'white',
  closePopupColor: '#B3ABC2',
  dropdownBackground: "#EDEDEF",
  dropdownBorder: "none",
  dropdownSelectedTextColor: MAIN_COLOR,
  dropdownTextColor: '#5F5968',
  boxMuted: '#A599BA',
  boxHighlighted: MAIN_COLOR,

  inputBackground: '#F6F7F9',
  inputBorder: '#E8E8E8',
  inputColor: '#5F5968',

  scrollbarBackground: '#EDEDEF',
  scrollbarThumb: '#A599BA',
};


export const DARK_MODE = {
  defaultColor: MAIN_COLOR,
  backgroundColor: '#272727',
  borderColor: '#454545',

  questionBackgroundColor: MAIN_COLOR,
  questionTextColor: 'white',
  responseBackgroundColor: '#454545',
  responseTextColor: '#F4F4F4',

  popupBackgroundColor: '#383838',
  closePopupColor: '#8F8F8F',
  dropdownBackground: '#4A4A4A',
  dropdownBorder: "1px solid #565656",
  boxMuted: '#898989',
  boxHighlighted: 'white',
  dropdownSelectedTextColor: 'white',
  dropdownTextColor: '#C4C4C4',

  inputBackground: '#454545',
  inputBorder: '#636363',
  inputColor: '#C4C4C4',

  scrollbarBackground: '#4F4F4F',
  scrollbarThumb: '#8A8592',
};


let isDarkMode = false;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDarkMode = true;
}

export const COLORS = isDarkMode ? DARK_MODE : LIGHT_MODE;
