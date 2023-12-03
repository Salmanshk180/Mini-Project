// headingReducer.js
import {
  ADD_HEADING,
  UPDATE_HEADING,
  SET_HEADINGS,
  UPDATE_FONTSIZE,
  DELETE_HEADING,
  CHANGE_FONTFAMILY,
  UPDATE_TEXT_COLOR,
  UPDATE_TEXT_ALIGNMENT,
  TOGGLE_STYLE,
  UPDATE_BACKGROUND_COLOR,
  ADD_TEXTS
} from "../actions/headingAction";

const initialState = {
  headings: [],
};

const headingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEADING:
      return {
        ...state,
        headings: [...state.headings, action.payload],
      };

      case ADD_TEXTS:
        return {
          ...state,
          headings: [...state.headings, action.payload],
        };

    case UPDATE_HEADING:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? { ...heading, ...action.payload.data }
            : heading
        ),
      };

    case UPDATE_FONTSIZE:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? { ...heading, fontSize: action.payload.fontSize }
            : heading
        ),
      };

    case SET_HEADINGS:
      return {
        ...state,
        headings: action.payload,
      };

    case DELETE_HEADING:
      return {
        ...state,
        headings: state.headings.filter((_, index) => index !== action.payload),
      };

    case CHANGE_FONTFAMILY:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? {
                ...heading,
                headingFontFamily: action.payload.headingFontFamily,
              }
            : heading
        ),
      };

    case UPDATE_TEXT_COLOR:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? { ...heading, textColor: action.payload.textColor }
            : heading
        ),
      };

    case UPDATE_TEXT_ALIGNMENT:
      const alignmentHeadings = [...state.headings];
      alignmentHeadings[action.payload.index].textAlignment =
        action.payload.alignment;
      return { ...state, headings: alignmentHeadings };

    case TOGGLE_STYLE:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? {
                ...heading,
                bold:
                  action.payload.style === "bold"
                    ? !heading.bold
                    : heading.bold,
                italic:
                  action.payload.style === "italic"
                    ? !heading.italic
                    : heading.italic,
                underline:
                  action.payload.style === "underline"
                    ? !heading.underline
                    : heading.underline,
              }
            : heading
        ),
      };

      case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        headings: state.headings.map((heading, index) =>
          index === action.payload.index
            ? { ...heading, bgColor: action.payload.bgColor }
            : heading
        ),
      };
    default:
      return state;
  }
};

export default headingReducer;
