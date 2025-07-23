import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    fontWeightNormal: number;
    textPrimary: string;
    divider: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    inputBorder: string;
    textError: string;
    textAccent: string;
    borderRadiusLarge: string;
    borderRadiusSmall: string;
    transition: string;
    mode: string;
  }
}

const baseTheme = {
  fontFamily: '"Literata", "Georgia", serif',
  fontWeightNormal: 400,
  textPrimary: "rgba(18, 18, 18, 1)",
  divider: "rgba(183, 183, 183, 1)",
  backgroundPrimary: "rgba(255, 255, 255, 1)",
  backgroundSecondary: "rgba(18, 18, 18, 1)",
  inputBorder: "rgba(18, 18, 18, 1)",
  textError: "rgba(141, 2, 31, 1)",
  textAccent: "rgba(82, 72, 156, 1)",
  borderRadiusLarge: "5px",
  borderRadiusSmall: "3px",
  transition: "0.2s ease-in-out",
};

export const lightTheme = {
  ...baseTheme,
  mode: "light",
};

export const darkTheme = {
  ...baseTheme,
  mode: "dark",
  textPrimary: "rgba(255, 255, 255, 1)",
  backgroundPrimary: "rgba(18, 18, 18, 1)",
  backgroundSecondary: "rgba(255, 255, 255, 1)",
  inputBorder: "rgba(255, 255, 255, 1)",
};
