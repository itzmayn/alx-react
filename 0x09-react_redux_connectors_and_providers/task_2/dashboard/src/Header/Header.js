import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/hbnblogo.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

// CSS styles for the Header component
const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid #E0354B",
    marginBottom: 60
  },
  img: {
    width: 160,
    height: 160
  },
  heading: {
    color: "#E0354B"
  },
  logOut: {
    fontStyle: "italic",
    textDecoration: "underline",
    cursor: "pointer"
  }
});

// Header component definition
export class Header extends React.Component {
  render() {
    const { user } = this.props;

    // Function to display logout link if user is logged in
    const displayText = () => {
      if (this.props.isLoggedIn) {
        return (
          <section id="logoutSection">Welcome {user.email} 
            <a className={css(styles.logOut)} onClick={this.props.logOut}> (logout)</a>
          </section>
        );
      }
    };

    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt="logo"/>
          <h1 className={css(styles.heading)}>School dashboard</h1>
        </div>
        {displayText()}
      </>
    );
  }
}

// mapStateToProps function to extract state values as props
const mapStateToProps = (state) => {
  const user = state.get("user");
  const isLoggedIn = state.get("isUserLoggedIn");
  return { user, isLoggedIn };
}

// mapDispatchToProps function to dispatch logout action
const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logout()) };
}

// PropTypes definitions for Header component props
Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool
}

// Default props for Header component
Header.defaultProps = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
}

// Connect Header component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
