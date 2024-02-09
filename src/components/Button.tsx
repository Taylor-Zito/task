import { styled } from "../theme/stitches.config";

export const Button = styled("button", {
  display: "inline-flex",
  gap: "$2",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  appearance: "none",
  userSelect: "none",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  fontWeight: "$semibold",
  lineHeight: 1.2,
  borderRadius:"2.5rem",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  color: "white",
  "&:disabled": {
    boxShadow: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },

  variants: {
    size: {
      md: {
        fontSize: 15,
        minWidth: "2rem",
        padding: "1rem",
      },
    },
    color: {
      primary: {
        // for outline and ghost variants
        color: "white",
        borderColor: "$primary1",
        backgroundColor: "green",
        "&:hover": {
          backgroundColor: "#3ab33a",
        },
      },
      secondary: {
        backgroundColor: "#146fb8",
        "&:hover": {
          backgroundColor: "#57acf0",
        },
      },

    },
    variant: {
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "primary",
  },
});
