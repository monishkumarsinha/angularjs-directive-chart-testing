describe('Directive: chartRisk', function() {

  'use strict';

  beforeEach(module('directiveExampleApp'));

  var element, scope;

  beforeEach(module('views/directives/chartRisk.html'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<div data-chart-risk="risk"></div>');

    scope = $rootScope;

    scope.risk = {
      low: 200,
      medium: 100,
      high: 100
    };

    $compile(element)(scope);

    scope.$digest();
  }));

  it('should have the correct amount of albums in the list', function() {
    expect(element.find('.high').css('width')).toBe('25%');
    expect($(element.find('.high'))).toHaveCss({'width': '25%'});
  });
});