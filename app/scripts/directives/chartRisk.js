/**
 * Risk chart directive. Attribute value determines watched scope variable. Has fixed width available in styles
 */
angular.module('directiveExampleApp')
  .directive('chartRisk',
  function () {

    'use strict';

    return {
      templateUrl: 'views/directives/chartRisk.html',
      link: linkMethod
    };

    function linkMethod(scope, element, attrs) {
      var blocks
        , HIGH_CLASS = '.high'
        , MEDIUM_CLASS = '.medium'
        , LOW_CLASS = '.low'
        , RISK_COST_CLASS = '.costForRisk'
        , MILLION = 'M'
        , CURRENCY = '$'
        ;

      // Init the chart
      init();

      /**
       * Initializer
       *
       * @returns void
       */
      function init() {
        blocks = {
          'high': {
            blockEl: element.find(HIGH_CLASS),
            blockCostEl: element.find(HIGH_CLASS + ' ' + RISK_COST_CLASS)
          },
          'medium': {
            blockEl: element.find(MEDIUM_CLASS),
            blockCostEl: element.find(MEDIUM_CLASS + ' ' + RISK_COST_CLASS)
          },
          'low': {
            blockEl: element.find(LOW_CLASS),
            blockCostEl: element.find(LOW_CLASS + ' ' + RISK_COST_CLASS)
          }
        };

        attachListener();
      }

      /**
       * Attaches attrs.chartRisk scope variable watcher
       *
       * @returns void
       */
      function attachListener() {
        scope.$watch(attrs.chartRisk, function (riskSummaryData) {
          setChartBlockWidth(riskSummaryData);
        });
      }

      /**
       * Sets correct chart's columns width based on displayed values
       *
       * @param {object} riskSummaryData
       * @returns void
       */
      function setChartBlockWidth(riskSummaryData) {
        var riskType;
        var totalValue = getTotalValue(riskSummaryData);

        for (riskType in riskSummaryData) {
          if (riskSummaryData.hasOwnProperty(riskType)) {
            if (totalValue === 0) {
              blocks[riskType].blockEl.css('width', '');
              return;
            }

            setWidthHelper();
            setElementText();
          }
        }

        function setElementText() {
          blocks[riskType].blockCostEl.text(roundMillion(riskSummaryData[riskType]));
        }

        function setWidthHelper() {
          var width = getWidth(riskSummaryData[riskType], totalValue);

          if (!width) {
            blocks[riskType].blockEl.css({width: '', display: 'none'});
          } else {
            blocks[riskType].blockEl.css({width: width + '%', display: ''});
          }
        }

        function roundMillion(number) {
          if (!number) {
            return 0;
          }

          return CURRENCY + (Math.round((number / 1000000) * 10) / 10) + MILLION;
        }
      }

      /**
       * Return chart's column width based on passed value
       *
       * @param {number} riskTypeValue
       * @param {number} totalValue
       * @returns number
       */
      function getWidth(riskTypeValue, totalValue) {
        return Math.floor((riskTypeValue / totalValue) * 100);
      }

      /**
       * Returns total value of all risk types
       *
       * @param {object} riskSummaryData
       * @returns number
       */
      function getTotalValue(riskSummaryData) {
        var totalValue = 0;
        var riskType;

        for (riskType in riskSummaryData) {
          if (riskSummaryData.hasOwnProperty(riskType)) {
            totalValue += riskSummaryData[riskType];
          }
        }

        return totalValue;
      }
    }

  });
