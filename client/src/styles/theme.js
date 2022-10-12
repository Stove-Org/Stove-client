import "./font.css";

const color = {
  main100: "#F54242",
  main80: "#F56767",
  main60: "#FFBEBE",
  grayScale: {
    gray90: "#333333",
    gray80: "#555555",
    gray70: "#777777",
    gray60: "#999999",
    gray50: "#AAAAAA",
    gray40: "#C7C7C7",
    gray30: "#DBDBDB",
    gray20: "#EEEEEE",
    gray10: "#F7F7F7",
  },
  white: "#fff",
  black: "#000",
};

const typography = {
  bodySmRegular: `
    font-size: 1.2rem;
    font-weight: normal;
    font-family:NotoSansKR-Regular;
  `,
  bodySmBold: `
    font-size: 1.2rem;
    font-weight: bold;
    font-family:NotoSansKR-Bold;
  `,
  bodyRg: `
    font-size: 1.4rem;
    font-weight: normal;
    font-family:NotoSansKR-Regular;
  `,
  bodyRgBold: `
    font-size: 1.4rem;
    font-weight: bold;
    font-family:NotoSansKR-Bold;
  `,
  headRg: `
    font-size: 1.8rem;
    font-weight: normal;
    font-family:NotoSansKR-Regular;
  `,
  headRgBold: `
    font-size: 1.8rem;
    font-weight: bold;
    font-family:NotoSansKR-Bold;
  `,
};

const theme = {
  color,
  typography,
};

export default theme;
