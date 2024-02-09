import { globalCss } from "./stitches.config";


export const globalStyles = globalCss({
  html: {
    $$navbarHeight: "91px",
    boxSizing: "border-box",
  },
  "*, *::after, *::before": {
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "inherit",
  },
  body: {
    height:"100vh",
    backgroundColor: "white",
    color: "#525252",
    fontFamily: "$poppins",
    fontSize:18,
    lineHeight: "$base",
    fontFeatureSettings: "kern",
    transitionProperty: "backgroundColor",
    transitionDuration: "$normal",
    '.spinner':{
      display:"inline-flex",
      alignItems:"center",
      ml:"1rem"
    }
  },
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "underline",
    cursor:"pointer",
    fontSize:14
  },

});
