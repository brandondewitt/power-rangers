import PowerRangersDetailCtrl from './controller';

export default function () {
  return {
    scope: {
      ranger: '='
    },
    controller: PowerRangersDetailCtrl,
    controllerAs: 'powerRangersDetailCtrl',
    bindToController: true,
    template: `
      <div>
        <h1>{{powerRangersDetailCtrl.ranger.name}}</h1>
      </div>
    `
  };
}
