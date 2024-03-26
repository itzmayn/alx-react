import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes.js";

// Action creator: Select a course
export function selectCourse(index) {
  return { type: SELECT_COURSE, index };
}

// Action creator: Unselect a course
export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
}

// Action creator: Fetch courses successfully
export function fetchCourseSuccess() {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  };  
}

// Action creator: Set courses
export function setCourses(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}

// Thunk action creator: Fetch courses from JSON file
export function fetchCourses() {
  return dispatch => {
    return fetch("/courses.json")
      .then(response => response.json())
      .then(data => dispatch(setCourses(data)));
  };
}

// Action creator: Handle row selection change
export function onChangeRow(id, checked) {
  return checked === true ? selectCourse(id) : unSelectCourse(id);
}
