import { is } from 'immutable';

/**
 * Checks if two Immutable.js Maps are equal using the 'is' function.
 * @param {Immutable.Map} map1 - The first Immutable.js Map.
 * @param {Immutable.Map} map2 - The second Immutable.js Map.
 * @returns {boolean} - True if the maps are equal, false otherwise.
 */
export default function areMapsEqual(map1, map2) {
  // Use the 'is' function from Immutable.js to check equality
  return is(map1, map2);
}
