import PowerRangersListCtrl from './controller';

export default function powerRangersListDirective() {
  return {
    scope: {
      rangers: '='
    },
    replace: true,
    controller: PowerRangersListCtrl,
    controllerAs: 'powerRangersListCtrl',
    bindToController: true,
    template: `
      <md-list>
        <power-rangers-list-item ranger='ranger' ng-repeat='ranger in powerRangersListCtrl.rangers'></power-rangers-list-item>
      </md-list>
    `
  };
}
