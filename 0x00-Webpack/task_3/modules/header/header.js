// Import jQuery thanks to Babel
import $ from 'jquery';

// Import styles for the header
import './header.css';

// Append elements to the body
$('body').append(`<div id="logo"></div>`);
$('body').append(`<p>Holberton Dashboard</p>`);

// Log an initialization message to the console
console.log('Init header');
