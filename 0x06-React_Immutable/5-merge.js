import { Map, List } from 'immutable';

/**
 * Concatenates two arrays into a single Immutable.js List.
 * @param {Array} page1 - The first array to be concatenated.
 * @param {Array} page2 - The second array to be concatenated.
 * @returns {Immutable.List} - The resulting Immutable.js List.
 */
export function concatElements(page1, page2) {
  // Convert the input arrays to Immutable.js Lists
  const list1 = List(page1);
  const list2 = List(page2);

  // Use the 'concat' method to concatenate the two Lists
  return list1.concat(list2);
}

/**
 * Merges two objects into a single Immutable.js Map.
 * @param {Object} page1 - The first object to be merged.
 * @param {Object} page2 - The second object to be merged.
 * @returns {Immutable.Map} - The resulting Immutable.js Map.
 */
export function mergeElements(page1, page2) {
  // Convert the input objects to Immutable.js Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use the 'merge' method to merge the two Maps
  return map1.merge(map2);
}
