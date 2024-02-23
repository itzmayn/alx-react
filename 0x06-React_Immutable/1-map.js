import { Map } from 'immutable';

/**
 * Converts a JavaScript object to an Immutable.js Map.
 * @param {Object} object - The JavaScript object to be converted.
 * @returns {Immutable.Map} - The resulting Immutable.js Map.
 */
export default function getImmutableObject(object) {
  // Use the 'Map' function from the Immutable.js library to convert the object
  return Map(object);
}
