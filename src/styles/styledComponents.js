const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
}
  
export const devices = {
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xl: `(max-width: ${breakpoints.xl})`,
    "2xl": `(max-width: ${breakpoints["2xl"]})`,
}