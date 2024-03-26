import { fetchNotifications, markAsRead, setLoadingState, setNotificationFilter, setNotifications } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock-jest"

// Configure mock Redux store with thunk middleware
const mockStore = configureStore([thunk])

// Clean up fetch mock after each test
afterEach(() => {
  fetchMock.restore();
});

// Test markAsRead action creator
test('markAsRead()', () => {
  // Dispatch markAsRead action with index 1
  const action = markAsRead(1)
  // Assert that the action object matches the expected format
  expect(action).toEqual({ type: MARK_AS_READ, index: 1 })
})

// Test setNotificationFilter action creator
test('setNotificationFilter()', () => {
  // Dispatch setNotificationFilter action with NotificationTypeFilters.DEFAULT
  const action = setNotificationFilter(NotificationTypeFilters.DEFAULT)
  // Assert that the action object matches the expected format
  expect(action).toEqual({ type: SET_TYPE_FILTER, filter:"DEFAULT" })
})

// Test setLoadingState action creator when loading is true
test("setLoadingState(true) returns right action object", () => {
  // Dispatch setLoadingState action with loading set to true
  const action = setLoadingState(true)
  // Assert that the action object matches the expected format
  expect(action).toEqual({ type: SET_LOADING_STATE, loading: true })
})

// Test setNotifications action creator
test("setNotifications()", () => {
  // Dispatch setNotifications action with undefined data
  const action = setNotifications(undefined)
  // Assert that the action object matches the expected format
  expect(action).toEqual({ type: FETCH_NOTIFICATIONS_SUCCESS, data: [] })
})

// Test fetchNotifications async action creator
test("fetchNotifications()", () => {
  // Create a mock Redux store
  const store = mockStore({})
  // Define the expected actions to be dispatched
  const expectedActions = [
    { type: 'SET_LOADING_STATE', loading: true },
    { type: 'FETCH_NOTIFICATIONS_SUCCESS', data: [] },
    { type: 'SET_LOADING_STATE', loading: false }
  ]
  // Mock the fetch request for notifications
  fetchMock.get("/notifications.json", [])
  // Dispatch the fetchNotifications async action and assert the dispatched actions
  return store.dispatch(fetchNotifications()).then(() => {
    const actions = store.getActions()
    expect(actions).toEqual(expectedActions)
  })
})
