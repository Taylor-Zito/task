import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import commonTheme from "./common";

const stitches = createStitches({
  ...commonTheme,

});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText,
  theme,
  config,
} = stitches;


export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T extends { [key: symbol | string]: any }> =
  Stitches.VariantProps<T>;
export type StitchesTheme = typeof theme;
