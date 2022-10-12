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
  HeadBold: {
    fontSize: 40,
    fontWeight: 700,
  },
  HeadRgBold: {
    fontSize: 24,
    fontWeight: 700,
  },
  SmHeadBold: {
    fontSize: 20,
    fontWeight: 700,
  },
  HeadRg: {
    fontSize: 28,
    fontWeight: 300,
  },
  bodyRg: {
    fontSize: 14,
    fontWeight: 400,
  },
  bodyRgBold: {
    fontSize: 14,
    fontWeight: 700,
  },
  captionMd: {
    fontSize: 13,
    fontWeight: 400,
  },
};

const theme = {
  color,
  typography,
};

export default theme;
