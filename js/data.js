const priceChart = {
  "D1-8.2-8.2": 5336,
  "D1-8.2-9.84": 6424,
  "D1-8.2-11.5": 7513,
  "D1-8.2-13.1": 8548,
  "D1-8.2-14.8": 9637,
  "D1-8.2-16.42": 10726,
  "D1-8.2-18.0": 11760,
  "D1-8.2-19.8": 12849,
  "D1-9.84-8.2": 6424,
  "D1-9.84-9.84": 7736,
  "D1-9.84-11.5": 9047,
  "D1-9.84-13.1": 10292,
  "D1-9.84-14.8": 11603,
  "D1-9.84-16.42": 12914,
  "D1-9.84-18.0": 14160,
  "D1-9.84-19.8": 15471,
  "D1-11.5-8.2": 7513,
  "D1-11.5-9.84": 9047,
  "D1-11.5-11.5": 10580,
  "D1-11.5-13.1": 12037,
  "D1-11.5-14.8": 13570,
  "D1-11.5-16.42": 15103,
  "D1-11.5-18.0": 16560,
  "D1-11.5-19.8": 18093,
  "D1-13.1-8.2": 8548,
  "D1-13.1-9.84": 10292,
  "D1-13.1-11.5": 12037,
  "D1-13.1-13.1": 13694,
  "D1-13.1-14.8": 15438,
  "D1-13.1-16.42": 17183,
  "D1-13.1-18.0": 18840,
  "D1-13.1-19.8": 20584,

  "D2-8.2-21.4": 13938,
  "D2-8.2-22.11": 14972,
  "D2-8.2-24.59": 16061,
  "D2-8.2-26.25": 17150,
  "D2-8.2-27.84": 18184,
  "D2-8.2-29.5": 19273,
  "D2-9.84-21.4": 16782,
  "D2-9.84-22.11": 18028,
  "D2-9.84-24.59": 19339,
  "D2-9.84-26.25": 20650,
  "D2-9.84-27.84": 21896,
  "D2-9.84-29.5": 23207,
  "D2-11.5-21.4": 19627,
  "D2-11.5-22.11": 21083,
  "D2-11.5-24.59": 22617,
  "D2-11.5-26.25": 24150,
  "D2-11.5-27.84": 25607,
  "D2-11.5-29.5": 27140,
  "D2-13.1-21.4": 22329,
  "D2-13.1-22.11": 23986,
  "D2-13.1-24.59": 25731,
  "D2-13.1-26.25": 27475,
  "D2-13.1-27.84": 29132,
  "D2-13.1-29.5": 30877,
};

const designOptions = ["D1", "D2"];

const lengthOptions = ["8.2", "9.84", "11.5", "13.1"];

const projectionOptions = {
  D1: [
    { value: "19.8", text: "19 ft 8 inch" },
    { value: "18.0", text: "18 ft 0 inch" },
    { value: "16.42", text: "16 ft 5 inch" },
    { value: "14.8", text: "14 ft 9 inch" },
    { value: "13.1", text: "13 ft 1 inch" },
    { value: "11.5", text: "11 ft 6 inch" },
    { value: "9.84", text: "9 ft 10 inch" },
    { value: "8.2", text: "8 ft 2 inch" },
  ],
  D2: [
    { value: "29.5", text: "29 ft 6 inch" },
    { value: "27.84", text: "27 ft 10 inch" },
    { value: "26.25", text: "26 ft 3 inch" },
    { value: "24.59", text: "24 ft 7 inch" },
    { value: "22.11", text: "22 ft 11 inch" },
    { value: "21.4", text: "21 ft 4 inch" },
  ],
};

const heightsOptions = ["Standard", "Max", "Custom"];

const colorsOptions = ["RAL7016", "RAL9016", "Custom"];

const mountingOptions = ["Freestanding", "Wall"];
const permitOptions = ["Yes", "No"];
const ledOptions = ["Yes", "No"];

const installationFeeByDesign = {
  D1: { value: "1500", text: "$1,500" },
  D2: { value: "2500", text: "$2,500" },
};

const screenPrices = {
  "6 ft 7 inch": {
    "4 ft 11 inch": 560.0,
    "6 ft 7 inch": 677.5,
    "8 ft 2 inch": 757.5,
    "9 ft 10 inch": 870.0,
    "11 ft 5 inch": 935.0,
    "13 ft 1 inch": 1037.5,
    "14 ft 9 inch": 1142.5,
    "16 ft 4 inch": 1247.5,
    "19 ft 8 inch": 1402.5,
  },
  "8 ft 2 inch": {
    "4 ft 11 inch": 650.0,
    "6 ft 7 inch": 757.5,
    "8 ft 2 inch": 897.5,
    "9 ft 10 inch": 987.5,
    "11 ft 5 inch": 1117.5,
    "13 ft 1 inch": 1180.0,
    "14 ft 9 inch": 1327.5,
    "16 ft 4 inch": 1452.5,
    "19 ft 8 inch": 1702.5,
  },
  "9 ft 10 inch": {
    "4 ft 11 inch": 777.5,
    "6 ft 7 inch": 917.5,
    "8 ft 2 inch": 1095.0,
    "9 ft 10 inch": 1102.5,
    "11 ft 5 inch": 1372.5,
    "13 ft 1 inch": 1485.0,
    "14 ft 9 inch": 1645.0,
    "16 ft 4 inch": 1805.0,
    "19 ft 8 inch": 2125.0,
  },
};

const screenHeightOptions = ["6 ft 7 inch", "8 ft 2 inch", "9 ft 10 inch"];

const screenWidthOptions = [
  "4 ft 11 inch",
  "6 ft 7 inch",
  "8 ft 2 inch",
  "9 ft 10 inch",
  "11 ft 5 inch",
  "13 ft 1 inch",
  "14 ft 9 inch",
  "16 ft 4 inch",
  "19 ft 8 inch",
];

export default {
  priceChart,
  designOptions,
  lengthOptions,
  projectionOptions,
  heightsOptions,
  colorsOptions,
  mountingOptions,
  permitOptions,
  ledOptions,
  installationFeeByDesign,
  screenPrices,
  screenHeightOptions,
  screenWidthOptions,
};
