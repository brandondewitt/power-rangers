import { createSelector } from 'reselect';

export const rangers = state => state.rangers.list;
export const ranger = state => state.rangers.listItem;

export const powerRangersSelector = createSelector(
  ranger,
  rangers,
  (ranger, rangers) => {
    console.log(ranger)
    return {
      ranger,
      rangers
    };
  }
);
