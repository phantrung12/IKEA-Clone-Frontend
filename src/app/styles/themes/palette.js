import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// declare module "@mui/material" {
//   interface Color {
//     0: string;
//     500_8: string;
//     500_12: string;
//     500_16: string;
//     500_24: string;
//     500_32: string;
//     500_48: string;
//     500_56: string;
//     500_80: string;
//   }
// }

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#bfdbfe",
  light: "#60a5fa",
  main: "#3b82f6",
  dark: "#2563eb",
  darker: "#1e40af",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#f3f4f6",
  light: "#9ca3af",
  main: "#6b7280",
  dark: "#4b5563",
  darker: "#1f2937",
  contrastText: "#fff",
};
const INFO = {
  lighter: "#ddd6fe",
  light: "#c4b5fd",
  main: "#8b5cf6",
  dark: "#7c3aed",
  darker: "#5b21b6",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#5b21b6",
  light: "#86efac",
  main: "#22c55e",
  dark: "#16a34a",
  darker: "#166534",
  contrastText: GREY[800],
};
const WARNING = {
  lighter: "#fed7aa",
  light: "#fdba74",
  main: "#f97316",
  dark: "#ea580c",
  darker: "#9a3412",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#fecaca",
  light: "#f87171",
  main: "#ef4444",
  dark: "#dc2626",
  darker: "#991b1b",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
