import { css } from "@emotion/css";

export const root = css`
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 1rem;
  max-height: 110px;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  }
  > img {
    max-width: 200px;
    object-fit: cover;
  }
`;
