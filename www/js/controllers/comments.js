/**
 * Comments controller
 */
angular
  .module('invisionApp.comments', [])

  .controller('CommentsController',
    function (commentsSvc) {
      'use strict';

      var vm = this;

      commentsSvc.getComments().then(function (comments) {
        vm.comments = comments.data.rows;
      });

    });
