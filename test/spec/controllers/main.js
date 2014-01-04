describe('Controller: MainCtrl', function () {

  'use strict';

  // load the controller's module
  beforeEach(module('directiveExampleApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(angular.isDefined(scope.riskData)).toBe(true);
  });
});
