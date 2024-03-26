// Import necessary modules and functions
import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk"
import fetchMock from "fetch-mock-jest"

// Configure mock store with thunk middleware
const mockStore = configureStore([thunk])

// Restore fetch mock after each test
afterEach(() => {
  fetchMock.restore();
});

// Test selectCourse action creator
test ('selectCourse func returns the right object', () => {
  // Call the selectCourse action creator
  const action = selectCourse(1)
  // Check if the returned action matches the expected action object
  expect(action).toEqual({ type: "SELECT_COURSE", index: 1 })
})

// Test unselectCourse action creator
test ('unselectCourse func returns the right object', () => {
  // Call the unselectCourse action creator
  const action = unSelectCourse(1)
  // Check if the returned action matches the expected action object
  expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 })
})

// Test fetchCourses async action creator
test("fetchCourses", () => {
  // Create a mock store
  const store = mockStore({})
  // Mock the fetch request
  fetchMock.get("/courses.json", [])
  // Dispatch the fetchCourses action and handle the promise
  return store.dispatch(fetchCourses()).then(() => {
    // Get the dispatched actions
    const actions = store.getActions()
    // Check if the dispatched actions match the expected action object
    expect(actions).toEqual([{ type: 'FETCH_COURSE_SUCCESS', data: [] }])
  })
})
