export const FETCH = 'POWER_RANGERS_FETCH';
export const RECEIVE_ALL = 'POWER_RANGERS_RECEIVE_ALL';
export const RECEIVE_ONE = 'POWER_RANGERS_RECEIVE_ONE';

const $inject = ['PowerRangersResource'];
export default function PowerRangerActions(PowerRangersResource) {
  function receiveAll(rangers) {
    return {
      type: RECEIVE_ALL,
      rangers
    };
  }

  function receiveOne(ranger) {
    return {
      type: RECEIVE_ONE,
      ranger
    };
  }

  function find() {
    return dispatch => {
      dispatch({ type: FETCH });
      PowerRangersResource
        .find()
        .then(response => dispatch(receiveAll(response)))
        .catch(response => console.warn(response));
    };
  }

  function findById(id) {
    return dispatch => {
      dispatch({ type: FETCH });
      PowerRangersResource
        .findById(id)
        .then(response => dispatch(receiveOne(response)))
        .catch(response => console.warn(response));
    };
  }

  function update(ranger) {
    return dispatch => {
      dispatch({ type: FETCH });
      PowerRangersResource
        .update(ranger)
        .then(response => dispatch(receiveOne(response)))
        .catch(response => console.warn(response));
    };
  }

  function destroy(id) {
    return dispatch => {
      PowerRangersResource
        .destroy(id)
        .then(response => console.log(`Ranger ${id} destroyed.`))
        .catch(response => console.warn(response));
    };
  }

  return {
    find,
    findById,
    update,
    destroy
  };
}
PowerRangerActions.$inject = $inject;
