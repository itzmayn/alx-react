import { Map } from 'immutable';

/*
  Function: mergeDeeplyElements

  Description:
  This function takes two objects as input and deeply merges them into a single Immutable.js Map.

  Parameters:
  - page1 (Object): The first object to be merged deeply.
  - page2 (Object): The second object to be merged deeply.

  Returns:
  - Immutable.Map: The resulting Immutable.js Map.

  Notes:
  - The input objects are first converted to Immutable.js Maps using the 'Map' constructor.
  - The 'mergeDeep' method is then used to merge the two Maps deeply.
*/
export default function mergeDeeplyElements(page1, page2) {
  // Convert the input objects to Immutable.js Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use the 'mergeDeep' method to merge the two Maps deeply
  return map1.mergeDeep(map2);
}
