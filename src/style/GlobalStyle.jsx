import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* reset.css */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* {
  box-sizing: border-box;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* *** */
  :root {
    --lg-box-width: 12.5rem;
    --lg-box-height: 3.125rem;
    --lg-box-bgcolor: white;
    --lg-box-border: .1875rem solid #56efc4;
    --lg-danger-box-border: .1875rem solid #fab1a0;
    --sm-box-width: 6.25rem;
    --sm-box-height: 2.625rem;
    --color-success: #56efc4;
    --color-danger: #fab1a0;
    --color-danger-text: #d63031;
  }
  body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
  h2 {
    font-size: 2.375rem;
    font-weight: bold;
    margin: 10px;
  }
  button {
    width: 8.125rem;
    height: 2.8125rem;
    border-radius: .6875rem;
    border: none;
    background-color: var(--color-success);
    font-size: 1rem;
  }
  input {
    width: 13.75rem;
    height: 2.5rem;
    border: .0625rem solid black;
    border-radius: .625rem;
  }
  select {
    width: 18.75rem;
    height: 2.5rem;
    border-radius: .625rem;
  }
`;

export default GlobalStyle;
