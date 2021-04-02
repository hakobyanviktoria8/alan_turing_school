import { SET_FILES_STATE, SET_PATH_TITLE, SET_FILES_ARR } from "../actions/actionTypes";

const initialState = {
  filesState: false,
  pathTitle: "C# Programming",
  courses: [
    { id: 1,
      fileState: false, 
      title: "Basics of Programming", 
      lessons: [{num: 1, id:11, title: 'Intro to C#', lessonFiles: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2}], lessonState: false}, {num: 2, id: 12, title: 'Intro to C#', lessonFiles: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2}], lessonState: false},{num: 3, id: 13, title: 'Intro to C#', lessonFiles: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2}], lessonState: false}, {num: 4, title: 'Intro to C#', lessonFiles: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2}], lessonState: false}, {num: 5, title: 'Intro to C#', lessonFiles: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2}], lessonState: false}, {num: 6, title: 'Intro to C#'},], 
      files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]
    },
    { id: 2, 
      fileState: false, 
      title: "English", 
      lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}],
      files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]
    },
    {id: 3, fileState: false, title: "Soft skills", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 4, fileState: false, title: "Basics of Programming 2", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 5, fileState: false, title: "English 2", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
    {id: 6, fileState: false, title: "Soft skills 2", lessons: [{num: 1, title: 'Intro to C#'}, {num: 2, title: 'Intro to C#'},{num: 3, title: 'Intro to C#'}, {num: 4, title: 'Intro to C#'}, {num: 5, title: 'Intro to C#'}, {num: 6, title: 'Intro to C#'}], files: [{title: 'C#_Lesson1_presentation', id:1},{title: 'english modal verbs', id:2},{title: 'modal verbs', id:3},{title: 'Effective java by Joshua Bloch', id:4}]},
  ],
  filesArr: [],
  currentCourse: false
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILES_STATE:
      return {
        ...state,
        filesState: action.payload,
      };
    case SET_PATH_TITLE:
      return {
        ...state,
        pathTitle: action.payload,
      };
    case SET_FILES_ARR:
      return {
        ...state,
        filesArr: action.payload,
    };
    // case SET_CURRENT_COURSE:
    //   return {
    //     ...state,
    //     currentCourse: action.payload,
    // };
    default:
      return state;
  }
};

export default filesReducer;