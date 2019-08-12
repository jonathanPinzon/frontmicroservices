import angular from 'angular';
import template from './root.template.html';

angular
  .module('angularJS-app')
  .component('root', {
    template,
    controllerAs: 'ct',
    controller($scope) {
      const ct = this;
      ct.helloMessage = '';
      window.e.on('displayHello', function (data) {
        $scope.$apply(function () {
          console.log(sessionStorage.getItem("uno"));
          ct.helloMessage = data.foo;
        });
      });
    },
  })