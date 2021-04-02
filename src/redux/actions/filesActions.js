import { SET_FILES_STATE, SET_PATH_TITLE, SET_FILES_ARR } from "./actionTypes";

export function setFilesState(filesState) {
  return {
    type: SET_FILES_STATE,
    payload: filesState
  }
};

export function setPathTitle(pathTitle) {
  return {
    type: SET_PATH_TITLE,
    payload: pathTitle
  }
};

export function setFilesArr(filesArr) {
  return {
    type: SET_FILES_ARR,
    payload: filesArr
  }
};

// export function setCurrentCourse(currentCourse) {
//   return {
//     type: SET_CURRENT_COURSE,
//     payload: currentCourse
//   }
// };