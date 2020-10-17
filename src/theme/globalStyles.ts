import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   height: 100%
 }
 body {
  font-family: Raleway;
 }
`;

export default GlobalStyle;
