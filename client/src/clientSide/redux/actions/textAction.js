// textSizeActions.js
export const incrementFontSize = (id) => ({
  type: "INCREMENT_FONT_SIZE",
  id,
});

export const decrementFontSize = (id) => ({
  type: "DECREMENT_FONT_SIZE",
  id,
});
