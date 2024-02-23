import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

/**
 * Functional component representing the Footer of the application.
 * @returns {JSX.Element} - React component
 */
function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  );
}

export default Footer;
