// Importing notification data from the specified file path
import notificationData from '../../../../notifications.json';

/**
 * Retrieves all notifications for a given user.
 * @param {string} userId - The unique identifier of the user.
 * @returns {string[]} - An array of notification contexts for the user.
 */
export default function getAllNotificationsByUser(userId) {
    // Filter notifications for the specified user
    const userNotifications = notificationData.filter((notification) => notification.author.id === userId);
    
    // Extract notification contexts and create an array
    const userNotificationContexts = userNotifications.map((notification) => notification.context);
    
    // Return the array of notification contexts
    return userNotificationContexts;
}
