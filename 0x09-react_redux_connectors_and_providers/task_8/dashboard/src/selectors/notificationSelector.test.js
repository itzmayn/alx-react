import { Map } from "immutable";

// Importing selectors from notificationSelector module
import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from "./notificationSelector";

// Mock state object for testing selectors
const state = {
  notifications: Map({
    notifications: Map({
      '1': { id: 1, type: 'default', value: 'New data available', isRead: true },
      '2': { id: 2, type: 'urgent', value: 'New data available', isRead: false }
    }),
    filter: "URGENT"
  })
};

// Test for filterTypeSelected selector
test("selector: filterTypeSelected, returns filter property in state", () => {
  // Execute the filterTypeSelected selector with the mock state
  const selectedFilterType = filterTypeSelected(state);
  // Assert that the returned value matches the expected value from the state
  expect(selectedFilterType).toEqual(state.notifications.get("filter"));
});

// Test for getNotifications selector
test("selector: selectedNotifications, returns all notifications present in state", () => {
  // Execute the getNotifications selector with the mock state
  const selectedNotifications = getNotifications(state);
  // Assert that the returned value matches the expected value from the state
  expect(selectedNotifications).toEqual(state.notifications.get("notifications"));
});

// Test for getUnreadNotificationsByType reselector
test("reselector: getUnreadNotificationsByType, returns unread urgent notifications when the filter is set to 'URGENT'", () => {
  // Define the expected value based on the mock state
  let expected = [
    { id: 2, type: 'urgent', value: 'New data available', isRead: false }
  ];
  // Execute the getUnreadNotificationsByType reselector with the mock state
  const selectedUnread = getUnreadNotificationsByType(state);
  // Assert that the returned value matches the expected value
  expect(selectedUnread.toJS()).toEqual(expected);
});
