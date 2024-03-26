import { createSelector } from "reselect";

// Selector to retrieve the filter type selected from the state
export const filterTypeSelected = (state) => state.notifications.get("filter");

// Selector to retrieve the notifications from the state
export const getNotifications = (state) => state.notifications.get("notifications");

// Selector to get unread notifications by their type using Reselect
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    let unreadNotifications = [];
    if (filter === "DEFAULT") {
      unreadNotifications = notifications.valueSeq().filter(notification => !notification.isRead);
    } else if (filter === "URGENT") {
      unreadNotifications = notifications.valueSeq().filter(notification => !notification.isRead && notification.type === "urgent");
    }
    return unreadNotifications;
  }
);
