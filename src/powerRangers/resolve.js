export const find = ($ngRedux, PowerRangerActions) => {
  $ngRedux.dispatch(PowerRangerActions.find());
};
find.$inject = ['$ngRedux', 'PowerRangerActions'];

export const findById = ($ngRedux, PowerRangerActions, $stateParams) => {
  $ngRedux.dispatch(PowerRangerActions.findById($stateParams.id));
};
findById.$inject = ['$ngRedux', 'PowerRangerActions', '$stateParams'];
