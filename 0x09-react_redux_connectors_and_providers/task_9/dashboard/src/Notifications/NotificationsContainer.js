import React from "react";
import { Notifications } from './Notifications'
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from "react-redux"
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import PropTypes from 'prop-types';

// Container component for managing notifications
export class NotifContainer extends React.Component {
  // PropTypes for component props
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    setNotificationFilter: PropTypes.func,
    displayDrawer: PropTypes.bool,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func
  }

  // Default props for component props
  static defaultProps = {
    messages: [],
    displayDrawer: false,
    showDrawer: () => {},
    hideDrawer: () => {},
    setNotificationFilter: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {}
  }

  // Fetch notifications when component mounts
  componentDidMount() {
    this.props.fetchNotifications()
  }

  // Render Notifications component passing props
  render () {
    return <Notifications {...this.props}/>
  }
}

// Map state to props to retrieve notifications
const mapStateToProps = (state) => {
  return { messages: getUnreadNotificationsByType(state).toJS() }
}

// Map dispatch to props to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (index) => dispatch(markAsRead(index)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  }
}

// Connect NotifContainer to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NotifContainer)
