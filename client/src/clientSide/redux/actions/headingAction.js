// headingAction.js
export const ADD_HEADING = "ADD_HEADING";
export const SET_HEADINGS = "SET_HEADINGS";
export const UPDATE_HEADING = "UPDATE_HEADING";
export const UPDATE_FONTSIZE = "UPDATE_FONTSIZE";
export const DELETE_HEADING = "DELETE_HEADING";
export const CHANGE_FONTFAMILY = "CHANGE_FONTFAMILY";
export const UPDATE_TEXT_COLOR = "UPDATE_TEXT_COLOR";
export const UPDATE_TEXT_ALIGNMENT = "UPDATE_TEXT_ALIGNMENT";
export const TOGGLE_STYLE = "TOGGLE_STYLE";
export const UPDATE_BACKGROUND_COLOR = "UPDATE_BACKGROUND_COLOR";
export const ADD_TEXTS = "ADD_TEXTS";
export const addHeading = (text, x, y, fontSize) => ({
  type: ADD_HEADING,
  payload: { text, x, y, fontSize },
});
export const addTexts = (text,x,y,fontSize,fontColor,textStyle,textBackgroundColor,fontFamily,fontWeight) => ({
  type: ADD_TEXTS,
  payload: { text, x, y, fontSize,fontColor,textStyle,textBackgroundColor,fontFamily,fontWeight},
})

export const updateHeading = (index, data) => ({
  type: UPDATE_HEADING,
  payload: { index, data },
});

export const setHeadings = (headings) => ({
  type: SET_HEADINGS,
  payload: headings,
});

export const updateFontSize = (index, fontSize) => ({
  type: UPDATE_FONTSIZE,
  payload: { index, fontSize },
});

export const deleteHeading = (index) => ({
  type: DELETE_HEADING,
  payload: index,
});

export const changeFontFamily = (index, headingFontFamily) => ({
  type: CHANGE_FONTFAMILY,
  payload: { index, headingFontFamily },
});

export const updateTextColor = (index, textColor) => ({
  type: UPDATE_TEXT_COLOR,
  payload: { index, textColor },
});

export const updateTextAlignment = (index, alignment) => ({
  type: UPDATE_TEXT_ALIGNMENT,
  payload: { index, alignment },
});


export const toggleStyle = (index, style) => ({
  type: TOGGLE_STYLE,
  payload: { index, style },
});

export const updateBackgroundColor = (index, bgColor) => ({
  type: UPDATE_BACKGROUND_COLOR,
  payload: { index, bgColor },
});

