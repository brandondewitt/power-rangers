import { powerRangersSelector } from 'powerRangers/selector';
const $inject = ['$scope', '$ngRedux', 'PowerRangerActions'];
export default function MainCtrl($scope, $ngRedux, PowerRangerActions) {
  $ngRedux.dispatch(PowerRangerActions.find())
  const unsubscribes = [
    $ngRedux.connect(powerRangersSelector, PowerRangerActions)(this)
  ];
  $scope.$on('$destroy', () => unsubscribes.forEach(unsubscribe => unsubscribe()));
}

MainCtrl.$inject = $inject;
