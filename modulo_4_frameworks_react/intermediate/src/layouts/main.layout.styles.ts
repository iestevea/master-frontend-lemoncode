import { css } from "@emotion/css"

export const root = css`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 50px 1fr;
  grid-gap: 2rem;
  transition: all 3s ease-in;
  &.without-cart {
    grid-template-columns: 90% 10%;
    grid-template-rows: 50px 1fr;
    grid-gap: 2rem;
  }
  grid-template-areas: 
  "header header"
  "content shopping-cart";
  .header {
    grid-area: header;
  }
  .content {
    grid-area: content;
  }
  .shopping-cart {
    grid-area: shopping-cart;
  }
`;