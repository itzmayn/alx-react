import React from 'react';
import { App, mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { mount, shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { StyleSheetTestUtils } from 'aphrodite';
import { listNotifications } from '../Notifications/Notifications.test'
import { fromJS } from 'immutable';

// Suppress Aphrodite style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear Aphrodite style buffer and resume injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

// Initialize a shallow wrapper for the App component
let wrapper = shallow(<App />);
describe('App Component', () => {
  // Test if the App component renders without crashing
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  // Test if the Header component is rendered within the App component
  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true)
  })

  // Test if the Login component is rendered within the App component
  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(true)
  })

  // Test if the Footer component is rendered within the App component
  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true)
  })

  // Test if the CourseList component is not rendered by default within the App component
  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  })

  // Test if the state is updated correctly after calling the logIn method
  it("state is updated accordingly, after calling logIn", () => {
    wrapper.instance().logIn("jack", "badpassword")

    // Check if user details are set and isLoggedIn is true
    expect(wrapper.state('user')).toEqual({"email": "jack", "isLoggedIn": true, "password": "badpassword"})
  })

  // Test if the state is updated correctly after calling the logOut method
  it("state is updated accordingly, after calling logOut", () => {
    wrapper.instance().logOut()

    // Check if default user details are set with isLoggedIn set to false
    expect(wrapper.state('user')).toEqual({"email": "", "isLoggedIn": false, "password": ""})
  })

  // Test if the listNotifications state is updated correctly after calling markNotificationAsRead method
  it("listNotifications state is updated accordingly, after calling markNotificationAsRead", () => {
    // Set the listNotifications state with a length of three
    wrapper.setState({listNotifications: listNotifications})
    // Call markNotificationAsRead method with an id
    wrapper.instance().markNotificationAsRead(1)
    // Check if listNotifications state now has a length of two
    expect(wrapper.state('listNotifications').length).toEqual(2)
  })


})

// const wrapper_isLoggedIn = shallow(<App/>);
describe('App Component when isLoggedin is true', () => {
  it("does not render Login component", () => {
    wrapper.setState({user:{email:'', password:'', isLoggedIn:true}})
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(false)
  })

  it("renders CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
  })
})

describe("mapStateToProps function", () => {
    test("mapStateToProps function", () => {
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });  
    const obj = mapStateToProps(state)
    expect(obj).toEqual({ isLoggedIn: true, displayDrawer: true })
  })
})