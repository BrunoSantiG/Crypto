import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }

    html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    background:var(--background)
  }

  :root {
    --primary:#F296B2;
    --secondary: #F56960;
    --secondary-hover:#CC5750;

    --background:${(props) => {
		return props.theme.colors.background;
	}};
    --text:${(props) => {
		return props.theme.colors.text;
	}}

    --white: #D9D9D9;
    --gray: #7A7A7A;
    --black: #000;
    --logo:#00676a
  }
`;
