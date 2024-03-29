export const languages = [
  { name: "Javascript", icon: "icons/javascript.svg" },
  { name: "Typescript", icon: "icons/typescript.svg" },
  { name: "Python", icon: "icons/python.svg" },
  { name: "Java", icon: "icons/java.svg" },
  { name: "Cpp", icon: "icons/c_cpp.svg" },
  { name: "HTML", icon: "icons/html.svg" },
  { name: "CSS", icon: "icons/css.svg" },
];

export const getExtension = (language: string) => {
  switch (language) {
    case "JavaScript":
      return ".js";
    case "Typescript":
      return ".ts";
    case "Python":
      return ".py";
    case "Java":
      return ".java";
    case "Cpp":
      return ".cpp";
    case "HTML":
      return ".html";
    case "CSS":
      return ".css";
    default:
      return ".js";
  }
};

export const themes = [
  "monokai",
  "dracula",
  "one_dark",
  "solarized_dark",
  "terminal",
  "tomorrow",
  "twilight",
];

export const backgrounds = [
  {
    color: "linear-gradient(337deg,#654ea3,#da98b4)",
    name: "Mystique",
  },
  {
    color: "linear-gradient(354deg,#ff75b5,#ffb86c)",
    name: "Sunset",
  },
  {
    color: "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    name: "Radiance",
  },
  {
    color: "linear-gradient(90deg,#93f9b9,#1d976c)",
    name: "Verdant",
  },
  {
    color: "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
    name: "Sapphire",
  },
  {
    color: "#ffff",
    name: "Noir",
  },
  {
    color: "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
    name: "Vibrance",
  },
  {
    color: "linear-gradient(270deg,#514a9d,#24c6dc)",
    name: "Ethereal",
  },
];
// export const backgrounds = [
//   "linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))",
//   "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
//   "linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))",
//   "linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84))",
//   "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
//   "linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))",
//   "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
//   "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
// ];

export const initialCode = `// Welcome to Code-Doodle!

function code-doodle() {
  console.log("Paste your code here!");
}
`;
