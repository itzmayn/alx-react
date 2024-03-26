import { getListCourses } from "./courseSelector";
import { Map } from "immutable";

test("getListCourses", () => {
  // Mock state containing courses
  let state = {
    courses: Map({
      "2": {
        id: "2",
        name: "Webpack",
        credit: 20
      }
    })
  };
  
  // Call the selector function with the mock state
  const selectedCourses = getListCourses(state);

  // Assert that the selected courses match the expected output after conversion to plain JavaScript
  expect(selectedCourses.toJS()).toEqual([
    {
      id: "2",
      name: "Webpack",
      credit: 20
    }
  ]);
});
