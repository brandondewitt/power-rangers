import { powerRangersSelector } from 'powerRangers/selector';
export default class PowerRangersListViewCtrl {
  static get $inject() { return ['$scope', '$ngRedux', 'PowerRangerActions']; }
  constructor($scope, $ngRedux, PowerRangerActions) {
    const unsubscribes = [
      $ngRedux.connect(powerRangersSelector, PowerRangerActions)(this)
    ];
    $scope.$on('$destroy', () => unsubscribes.forEach(unsubscribe => unsubscribe()));
    console.log('PowerRangersCtrl', this);
  }
}
