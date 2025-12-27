const { COLOR_THEMES, FONT_THEMES } = require('../themes');

const THEME = process.env.BLOG_THEME || 'default';
const FONT_HEADINGS = process.env.BLOG_FONT_HEADINGS || 'sans-serif';
const FONT_BODY = process.env.BLOG_FONT_BODY || 'sans-serif';

export function generateCssVariables() {
  const cssVars = {};
  const themeColors = COLOR_THEMES[THEME]?.colors || {};
  for (const [key, value] of Object.entries(themeColors)) {
    cssVars[`--theme-${key}`] = value;
  }
  cssVars['--theme-headings'] = 'Geist' || 'Courier';
  cssVars['--theme-body'] = 'Geist' || 'Courier';
  
  const cssVarsString = Object.entries(cssVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');

  return cssVarsString;
}
