import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  background-color: ${theme.palette.primary.main};
  color: white;
  display: flex;
  justify-items: center;
  padding-left: 1rem;
`;