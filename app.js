'use strict';

var LimpiaEmailsApp = angular.module('LimpiaEmailsApp', []);

LimpiaEmailsApp.controller('MainCtrl', function ($scope) {
    $scope.sourceText = '';
    $scope.resultText = '';
    $scope.currentPage = 0;

    $scope.cleanEmails = function () {
        var _matches = $scope.sourceText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if (_matches == null) {
            $scope.resultText = '';
            $scope.currentPage = 2;
        } else {
            $scope.resultText = _matches.join('\n');
            $scope.currentPage = 1;
        }
    };

    $scope.goBack = function () {
        $scope.currentPage = 0;
    };
});
