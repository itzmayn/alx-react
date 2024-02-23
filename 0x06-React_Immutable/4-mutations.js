import { Map } from 'immutable';

/*
  Constant: map

  Description:
  Immutable.js Map representing a mapping of numbers to names.

  Values:
  - 1: 'Liam'
  - 2: 'Noah'
  - 3: 'Elijah'
  - 4: 'Oliver'
  - 5: 'Jacob'
  - 6: 'Lucas'
*/
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

/*
  Constant: map2

  Description:
  This constant represents an updated version of 'map'. It is created by applying mutations
  using the 'withMutations' method, changing the value associated with key 2 to 'Benjamin'
  and the value associated with key 4 to 'Oliver'.

  Type:
  - Immutable.Map
*/
export const map2 = map.withMutations((mapItem) => {
  mapItem.set(2, 'Benjamin').set(4, 'Oliver');
});
