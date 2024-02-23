import { fromJS } from 'immutable';

/*
  Function: accessImmutableObject

  Description:
  This function takes a JavaScript object, converts it into an Immutable.js Map, and then
  accesses a value in the Map based on the specified array of keys.

  Parameters:
  - object (Object): The JavaScript object to be converted to Immutable.js.
  - array (Array): The array of keys to access the value.

  Returns:
  - any: The value found at the specified keys or undefined if not found.

  Notes:
  - The function utilizes the 'fromJS' function to convert the object to Immutable.js.
  - The 'getIn' function is used to access the value based on the array of keys.
*/
export default function accessImmutableObject(object, array) {
  // Convert the JavaScript object to an Immutable.js Map
  const mappedObj = fromJS(object);

  // Use the 'getIn' function to access the value based on the specified array of keys
  return mappedObj.getIn(array, undefined);
}
