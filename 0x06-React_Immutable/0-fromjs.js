import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object to an Immutable.js object.
 * @param {Object} object - The JavaScript object to be converted.
 * @returns {Immutable.Map} - The resulting Immutable.js Map.
 */
export default function getImmutableObject(object) {
  // Use the 'fromJS' function from the Immutable.js library to convert the object
  return fromJS(object);
}
