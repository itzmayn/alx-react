import { List } from 'immutable';

/**
 * Creates an Immutable.js List from the specified array.
 * @param {Array} array - The array of elements to create the List from.
 * @returns {Immutable.List} - The resulting Immutable.js List.
 */
export function getListObject(array) {
  // Use the 'List' function from the Immutable.js library to create a List
  return List(array);
}

/**
 * Adds an element to an existing Immutable.js List.
 * @param {Immutable.List} list - The Immutable.js List to which the element is added.
 * @param {*} element - The element to be added to the List.
 * @returns {Immutable.List} - The updated Immutable.js List.
 */
export function addElementToList(list, element) {
  // Use the 'push' function to add an element to the List
  return list.push(element);
}
