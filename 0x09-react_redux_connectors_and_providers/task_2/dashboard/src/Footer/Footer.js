import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils'; // Importing utility functions
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking

// Styles for the Footer component
const styles = StyleSheet.create({
  AppFooter: {
    borderTop: "4px solid #E0354B",
    width: '99%',
    '@media (max-width: 900px)': {
      position: "relative",
      width: "100%",
      marginTop: 60
    }
  },
  AppFooter_p: {
    fontStyle: "italic",
    textAlign: "center"
  }
});

// Footer component definition
export function Footer(props) {
  // Generating footer text based on user login status
  const footerText = (props.isLoggedIn) ? <a href="#">Contact us</a> : `Copyright ${getFullYear()} - ${getFooterCopy(false)}`
  
  return (
    <div className={css(styles.AppFooter)}>
      <p className={css(styles.AppFooter_p)}>{footerText}</p>
    </div>
  );
}

// Mapping state to props for the Footer component
const mapStateToProps = (state) => {
  const user = state.get("user"); // Getting user data from Redux state
  const isLoggedIn = state.get("isUserLoggedIn"); // Checking if user is logged in
  return { user, isLoggedIn };
}

// PropTypes for type-checking
Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  isLoggedIn: PropTypes.bool
}

// Default props for the Footer component
Footer.defaultProps = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
}

// Connecting Footer component to Redux store
export default connect(mapStateToProps)(Footer);
