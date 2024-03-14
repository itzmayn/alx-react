import {
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
} from '../actions/uiActionTypes';

const defaultState = {
	isNotificationDrawerVisible: false, // Default state for notification drawer visibility
	isUserLoggedIn: false,               // Default state for user login status
	user: {},                           // Default state for user data
};

/* 
   Reducer function for UI actions
   Handles various UI-related actions such as displaying/hiding notification drawer,
   logging in/out users, etc.
*/
export default function uiReducer(state = defaultState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return { ...state, isNotificationDrawerVisible: true }; // Display notification drawer
		case HIDE_NOTIFICATION_DRAWER:
			return { ...state, isNotificationDrawerVisible: false }; // Hide notification drawer
		case LOGIN_SUCCESS:
			return { ...state, isUserLoggedIn: true }; // Set user as logged in upon successful login
		case LOGIN_FAILURE:
			return { ...state, isUserLoggedIn: false }; // Set user as logged out upon login failure
		case LOGOUT:
			return { ...state, isUserLoggedIn: false }; // Set user as logged out upon logout action
		default:
			return state;
	}
}
