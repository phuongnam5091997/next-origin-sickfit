import propTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  -@font-face {
    font-fammily: 'radnika_next;
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGray);
    offwhite: #ededed;
    --maxWidth: 1000px;
    --bx: '0 12px 24px 0 rgba(0, 0, 0, 0.09)';
    box-sizing: border-box;
   }
   *, *:before, *:after {
     box-sizing: inherit;
   }
   body {
     font-family: 'Ubuntu';
     padding: 0;
     margin: 0;
     font-size: 1.5rem;
     line-height:2;
   }
   a{
     text-decoration: none;
     color: var(--black);
   }
   a:hover {
     text-decoration: underline;
   }
`;

const InnerStyles = styled.div`
   max-width: var(--maxWidth);
   margin: 0 auto;
   padding: 2rem;
`;

export default function Page({ children}) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: propTypes.string,
  children: propTypes.any,
};
