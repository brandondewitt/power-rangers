import MainCtrl from './controller';

export default function AppDirective() {
  return {
    controller: MainCtrl,
    controllerAs: 'mainCtrl',
    template: `
      <div layout='column'>
        <md-toolbar layout="row">
          <div class="md-toolbar-tools">
            <md-button ng-click="vm.toggleSidenav('left')" hide-gt-sm class="md-icon-button">
              <md-icon aria-label="Menu" md-svg-icon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/68133/menu.svg">
              </md-icon>
            </md-button>
            <h1>Go Go Power Rangers!</h1>
          </div>
        </md-toolbar>
        <div layout='row'>
          <md-sidenav layout='column' class='md-sidenav-left' md-component-id='left' md-is-locked-open='$mdMedia("gt-sm")'>
            <power-rangers-list rangers='mainCtrl.rangers'></power-rangers-list>
          </md-sidenav>
          <md-content flex>
            <ui-view></ui-view>
          </md-content>
        </div>
      </div>
    `
  };
}
