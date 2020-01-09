const transparencyDark = percent => `rgba(0,0,0,${percent})`;

const dark = {
  10: transparencyDark(0.1),
  20: transparencyDark(0.2),
  30: transparencyDark(0.3),
  40: transparencyDark(0.4),
  50: transparencyDark(0.5),
  60: transparencyDark(0.6),
  70: transparencyDark(0.7),
  80: transparencyDark(0.8),
  90: transparencyDark(0.9),
  100: transparencyDark(1),
};

export default dark;
