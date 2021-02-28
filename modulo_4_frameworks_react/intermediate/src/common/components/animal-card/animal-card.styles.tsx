import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  border: 1px solid grey;
  border-radius: 5px;
  width: max-content;
  transition: background-color 0.5s ease;
  background-color: white;

  &:hover {
    background-color: ${theme.palette.primary.light};
    box-shadow: 0 8px 6px -6px grey;
  }
  &.selected {
    background-color: ${theme.palette.primary.main};
    color: white;
  }
  > img {
    max-width: 200px;
    object-fit: cover;
  }
  .content {
    padding: 1rem;
  }
`;
