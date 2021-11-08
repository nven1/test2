export interface IPallete {
  orange: string;
  white: string;
  grey1: string;
  grey2: string;
}

const pallete: IPallete = {
  orange: "#ff4a38",
  white: "#fff",
  grey1: "#242424",
  grey2: "#484848",
};

export const theme = {
  ...pallete,
  shadow: "0px -5px 30px 0px rgba(67,67,67,0.74)",
};
