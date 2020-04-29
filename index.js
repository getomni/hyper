'use strict';

const backgroundColor = '#191622';
const foregroundColor = '#E1E1E6';
const borderColor = '#483C67';
const cursorColor = '#f8f8f2';
const colors = {
  black: '#000000',
  red: '#ff5555',
  green: '#50fa7b',
  yellow: '#effa78',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#8d79ba',
  white: 'bfbfbf',
  lightBlack: '#4d4d4d',
  lightRed: '#ff6e67',
  lightGreen: '#5af78e',
  lightYellow: '#eaf08d',
  lightBlue: '#caa9fa',
  lightMagenta: '#ff92d0',
  lightCyan: '#aa91e3',
  lightWhite: '#e6e6e6'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: ${borderColor};
			}
		`
  });
};
