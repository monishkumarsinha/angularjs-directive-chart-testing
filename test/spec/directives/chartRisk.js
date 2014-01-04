describe('Directive: chartRisk', function () {

  'use strict';

  // load the directive's module
  beforeEach(module('directiveExampleApp'));
  beforeEach(module('views/directives/chartRisk.html'));

  var element = angular.element('<div data-chart-risk="riskSummary"></div>')
    , scope
    ;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  describe('Various edge case tests:', function () {
    it('should return 3 bars with width 33% for each', inject(function ($compile) {
      scope.riskSummary = {
        low: 100,
        medium: 100,
        high: 100
      };

      $compile(element)(scope);
      scope.$digest();

      var riskBarsWidth = riskBarWidth();

      expect(riskBarsWidth).toEqual(['33%', '33%', '33%']);
    }));

    it('should return 2 bars with width 50% for each', inject(function ($compile) {
      scope.riskSummary = {
        low: 100,
        medium: 100,
        high: 0
      };

      $compile(element)(scope);
      scope.$digest();

      var riskBarsWidth = riskBarWidth();

      expect(riskBarsWidth).toEqual(['0px', '50%', '50%']);
    }));

    it('should return 2 bars with width 50% for each', inject(function ($compile) {
      scope.riskSummary = {
        low: 100,
        medium: 200,
        high: 300
      };

      $compile(element)(scope);
      scope.$digest();

      var riskBarsWidth = riskBarWidth();

      expect(riskBarsWidth).toEqual(['50%', '33%', '16%']);
    }));
  });

  describe('Test directive with Jasmine-jQuery adapter', function () {


    it('should have the correct amount of albums in the list', inject(function ($compile) {

      scope.riskSummary = {
        low: 200,
        medium: 100,
        high: 100
      };

      $compile(element)(scope);
      scope.$digest();

      expect($(element.find('.high'))).toHaveCss({'width': '25%'});
    }));
  });

  function riskBarWidth() {
    var highRiskBar = getRiskBarWidth('.high');
    var mediumRiskBar = getRiskBarWidth('.medium');
    var lowRiskBar = getRiskBarWidth('.low');
    return [highRiskBar, mediumRiskBar, lowRiskBar];
  }

  function getRiskBarWidth(cssClass) {
    return element.find(cssClass).css('width');
  }
});
