'use strict';

// Register `indexPage` component, along with its associated controller and template
angular.
  module('indexPage').
  component('indexPage', {
    templateUrl: 'ng/index-page/index-page.template.html',
    controller: ['$http', '$routeParams', '$rootScope', function IndexPageController($http, $routeParams, $rootScope) {
        var self = this;
        self.project_slug = $routeParams.project;
        
    }]
  });