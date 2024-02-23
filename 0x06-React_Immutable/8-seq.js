import { Seq } from 'immutable';

/**
 * Prints information about the best students from the provided object.
 * @param {Object} object - The input object containing student information.
 */
export default function printBestStudents(object) {
  // Convert the input object to an Immutable.js Seq
  const seq = Seq(object);

  // Filter the Seq to select students with a score greater than 70
  const filtered = seq.filter((student) => {
    // Capitalize the first letter of the first name (not applied in the original code)
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  // Function to capitalize the first letter of a string
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Convert the filtered Seq back to a JavaScript object
  const JSObject = filtered.toJS();

  // Capitalize the first letter of the first and last names in the resulting object
  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  // Print the final JavaScript object with capitalized names
  console.log(JSObject);
}
