/**
 * Comments service
 */
angular
  .module('invisionApp.commentsService', [])

  .service('commentsService', function ($http, routesConfig) {

    'use strict';

    function _getComments() {
      return $http.get(routesConfig.comments.all());
    }

    return {
      getComments: _getComments
    };
  });
