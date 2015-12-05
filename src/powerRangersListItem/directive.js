import PowerRangersListItemCtrl from './controller';
export default function () {
  return {
    scope: {
      ranger: '='
    },
    replace: true,
    controller: PowerRangersListItemCtrl,
    controllerAs: 'powerRangersListItemCtrl',
    bindToController: true,
    template: `
      <md-list-item>
        <md-button ui-sref='powerRangers.detail({id: powerRangersListItemCtrl.ranger.id})'>{{powerRangersListItemCtrl.ranger.name}}</md-button>
      </md-list-item>
    `
  };
}
