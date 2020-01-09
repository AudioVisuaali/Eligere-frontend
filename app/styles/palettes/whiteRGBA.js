const transparencyWhite = percent => `rgba(255,255,255,${percent})`;

const whiteRGBA = {
  10: transparencyWhite(0.1),
  20: transparencyWhite(0.2),
  30: transparencyWhite(0.3),
  40: transparencyWhite(0.4),
  50: transparencyWhite(0.5),
  60: transparencyWhite(0.6),
  70: transparencyWhite(0.7),
  80: transparencyWhite(0.8),
  90: transparencyWhite(0.9),
  100: transparencyWhite(1),
};

export default whiteRGBA;
